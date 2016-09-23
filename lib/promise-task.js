const gaze = require('gaze');

class TaskList {
    constructor(taskData,list) {
        this.index = 0;
        this.taskData = taskData;
        this.list = list;
    }
    run(res) {
        res = res || [];
        return new Promise((resolve,reject) => {
            let tasks = this.list[this.index];
            if (!tasks) {
                resolve(res);
            } else {
                this._run(tasks).then((r) => {
                    ++this.index;
                    res.push(r);
                    return this.run(res);
                }).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                });
            }
        });
    }
    _run(tasks) {
        let promises = tasks.map((t) => {
            if (this.taskData[t]) {
                return new Promise((resolve,reject) => {
                    this.taskData[t](resolve,reject);
                });
            }
        });
        return Promise.all(promises);
    }
}
class PromiseTask {
    constructor() {
        this.tasks = {};
    }
    register(name,action) {
        this.tasks[name] = action;
    }
    run(taskList) {
        return new Promise((resolve,reject) => {
            let list = new TaskList(this.tasks,arguments);
            list.run().then(resolve,reject);
        });
    }
    watch(pattern,taskList) {
        let list = Array.prototype.slice.call(arguments,1);
        return new Promise((resolve,reject) => {
            gaze(pattern, (e, watcher) => {
                if (e) return reject(e);
                watcher.on('all', () => {
                    this.run(list);
                });
                resolve(watcher);
            });
        });
    }
}
module.exports = new PromiseTask();