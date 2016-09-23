'use strict';
const gaze = require('gaze');

class CoreWatch {
    constructor(eventType) {
        if (!eventType) {
            this.eventType = 'all';
        } else {
            this.eventType = eventType;
        }
    }
    watch(pattern,callback) {
        return new Promise((resolve,reject) => {
            gaze(pattern, (err, watcher) => {
                if (err) return reject(err);
                watcher.on(this.eventType, (e, filepath) => {
                    callback(e,filepath, watcher);
                });
                resolve(watcher);
            });
        });
    }
}
module.exports = CoreWatch;