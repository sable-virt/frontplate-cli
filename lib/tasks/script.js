'use strict';

const Rx = require('rxjs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ora = require('ora');
const timer = require('../util/timer');

/**
 * script task
 * @param config{object} webpack config object
 * @returns {Rx.Observable}
 */
module.exports = function (config) {
    timer.start('script');
    const spinner = ora('[build] script').start();

    if (process.env.NODE_PATH) {
        let paths = process.env.NODE_PATH.split(path.delimiter);
        config.resolve.modules = config.resolve.modules.concat(paths);
        config.resolveLoader.modules = config.resolveLoader.modules.concat(paths);
    }
    config.entry = config.entry || {};
    return Rx.Observable.create((observer) => {
        webpack(config, (err, stats) => {
            console.log(stats.toString({
                chunks: false,
                colors: true
            }));
            if (err || stats.hasErrors()) {
                spinner.fail();
                return observer.error(err);
            }
            let sj = stats.toJson(true);
            let files = [];
            sj.chunks.forEach((c) => {
                files = files.concat(c.files);
            });
            spinner.succeed();
            timer.end('script');
            observer.next(files);
        });
    });
};