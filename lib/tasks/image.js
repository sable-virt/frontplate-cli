'use strict';
const Rx = require('rxjs');
const imagemin = require('imagemin');
const ora = require('ora');
const timer = require('../timer');

/**
 * Image compression task
 * @param pattern{string} glob pattern string
 * @param dest{string} dest path
 * @param options{object} imagemin options(https://www.npmjs.com/package/imagemin)
 * @returns {Rx.Observable}
 */
module.exports = function (pattern, dest, options) {
    timer.start('image');
    const spinner = ora('[build] image').start();
    options = options || {};
    return Rx.Observable.create((observer) => {
        imagemin([pattern], dest, options).then((files) => {
            spinner.succeed();
            timer.end('image');
            observer.next(files);
        }, (e) => {
            spinner.fail();
            observer.error(e);
        });
    });
};