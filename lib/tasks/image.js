'use strict';
const Rx = require('rxjs');
const imagemin = require('imagemin');
const ora = require('ora');
const timer = require('../timer');
const glob = require('glob');
const gbase = require('glob-base');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * Image compression task
 * @param config{object} image tasks config
 * @returns {Rx.Observable}
 */
module.exports = function (config) {
    timer.start('image');
    const spinner = ora('[build] image').start();
    const conf = config.options || {};
    const srcs = glob.sync(config.src);
    const b = gbase(config.src);
    const outputFileAsObservable = Rx.Observable.bindNodeCallback(fs.outputFile);

    if (srcs.length === 0) {
        return Rx.Observable.of([]);
    }
    const obs = Rx.Observable.fromPromise(imagemin(srcs, conf))
        .flatMap(Rx.Observable.from)
        .map((file,index) => {
            file.src = srcs[index];
            file.dest = path.join(config.dest,path.relative(b.base,file.src));
            return outputFileAsObservable(file.dest,file.data);
        }).combineAll().share();

    obs.subscribe(() => {
        spinner.succeed();
        timer.end('image');
    },(e) => {
        console.error(chalk.red(e));
        spinner.fail();
        timer.end('image');
    });
    return obs;
};