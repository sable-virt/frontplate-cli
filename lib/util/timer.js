'use strict';
const Table = require('cli-table');
const chalk = require('chalk');

/**
 * Build time logger
 */
class TimeLogger {
  constructor() {
    this.logs = {};
    this.record = {};
  }

  /**
   * start timer
   * @param name{string} timer name
   */
  start(name) {
    this.logs[name] = Date.now();
  }

  /**
   * stop timer
   * @param name{string} timer name
   * @returns {number} lap time(ms)
   */
  end(name) {
    let lap = Date.now() - this.logs[name];
    this.record[name] = lap;
    return lap;
  }

  /**
   * Get lap time
   * @param name{string} timer name
   * @returns {*|Number} lap time(ms) or NaN
   */
  get(name) {
    return this.record[name] || NaN;
  }

  /**
   * Reset all timer
   */
  reset() {
    this.logs = {};
    this.record = {};
  }

  /**
   * Output time logs
   */
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
      let bar = createBar(time, totalTime);
      table.push([key, bar]);
    });
    table.push(['total', `${totalTime}ms`]);
    //table.push(['total', createBar(totalTime,totalTime)]);
    let str = table.toString();
    console.log(str);
    return str;
  }
}

/**
 * Create string bar
 * @param time{Number} build time
 * @param totalTime{Number} total build time
 * @returns {string} bar string
 */
function createBar(time, totalTime) {
  let percentage = time / totalTime;
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