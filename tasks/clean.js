'use strict';
const rimraf = require('rimraf');
const ora = require('ora');
const timer = require('../lib/timer');
const Rx = require('rxjs');

/**
 * clean task
 * @param pattern{string} glob pattern string
 * @param options{object} rimraf options (https://www.npmjs.com/package/rimraf)
 * @returns {Rx.Observable}
 */
module.exports = function(pattern,options) {
    options = options || {};
    return Rx.Observable.create((observer) => {
        timer.start('clean');
        const spinner = ora('[build] clean').start();
        rimraf(pattern,options,(e) => {
            if (e) {
                spinner.fail();
                return reject(e);
            }
            spinner.succeed();
            timer.end('clean');
            observer.next(pattern);
        });
    });
};