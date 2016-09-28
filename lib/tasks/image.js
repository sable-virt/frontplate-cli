'use strict';
const Rx = require('rxjs');
const imagemin = require('imagemin');
const ora = require('ora');
const timer = require('../timer');

/**
 * Image compression task
 * @param config{object} image tasks config
 * @returns {Rx.Observable}
 */
module.exports = function (config) {
    timer.start('image');
    const spinner = ora('[build] image').start();
    let conf = config.options || {};
    return Rx.Observable.create((observer) => {
        imagemin([config.src], config.dest, conf).then((files) => {
            spinner.succeed();
            timer.end('image');
            observer.next(files);
        }, (e) => {
            spinner.fail();
            observer.error(e);
        });
    });
};