'use strict';
const del = require('del');
const ora = require('ora');
const Rx = require('rxjs');
const timer = require('../util/timer');

/**
 * clean task
 * @param pattern{string} glob pattern string
 * @param options{object} rimraf options (https://www.npmjs.com/package/rimraf)
 * @returns {Rx.Observable}
 */
module.exports = function (config) {
  config = config || {};
  config.options = config.options || {};
  return Rx.Observable.create((observer) => {
    timer.start('clean');
    const spinner = ora('[build] clean').start();
    if (!config.src) {
      spinner.succeed();
      timer.end('clean');
      return observer.next(config.src);
    }
    del(config.src, config.options).then((paths) => {
      spinner.succeed();
      timer.end('clean');
      observer.next(config.src);
    }, (e) => {
      spinner.fail();
      timer.end('clean');
      return observer.error(e);
    });
  });
};