const Table = require('cli-table');
const chalk = require('chalk');
class TimeLogger {
    constructor() {
        this.logs = {};
        this.record = {};
    }

    start(name) {
        this.logs[name] = Date.now();
    }

    end(name) {
        let lap = Date.now() - this.logs[name];
        this.record[name] = lap;
        return lap;
    }

    get(name) {
        return this.record[name] || NaN;
    }

    reset() {
        this.logs = {};
        this.record = {};
    }

    output() {
        const table = new Table({
            head: ['Task name', 'Time(ms)'],
            style: {
                head: ['cyan'],
                compact: true
            }
        });
        let totalTime = 0;
        Object.keys(this.record).forEach((key) => {
            totalTime += this.record[key];
        });
        Object.keys(this.record).forEach((key) => {
            let time = this.record[key];
            let bar = createBar(time,totalTime);
            table.push([key, bar]);
        });
        table.push(['total', `${totalTime}ms`]);
        //table.push(['total', createBar(totalTime,totalTime)]);
        console.log(table.toString());
    }
}

function createBar(time,totalTime) {
    let percentage = time/totalTime;
    let rounded = Math.round(percentage * 100);
    if (rounded === 0) {
        return `${time}ms`;
    }
    let barLength = Math.ceil(50 * percentage) + 1;
    let bar = new Array(barLength).join('■');
    if (time > 5000) {
        return `${bar} ${chalk.red(time)}ms`;
    } else if (time > 2000) {
        return `${bar} ${chalk.yellow(time)}ms`;
    }
    return `${bar} ${time}ms`;
}

module.exports = new TimeLogger();