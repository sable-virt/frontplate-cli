'use strict';

const webpack = require('webpack');
const config = require('../config/webpack.config');
const ora = require('ora');

module.exports = function() {
    console.time('script');
    const spinner = ora('[build] script').start();
    return new Promise((resolve,reject) => {
        webpack(config,(err,stats) => {
            if (err) {
                spinner.fail();
                return reject(new Error(err));
            }
            spinner.succeed();
            console.log(stats.toString({
                chunks: false, // Makes the build much quieter
                colors: true
            }));
            let sj = stats.toJson(true);
            let files = [];
            sj.chunks.forEach((c) => {
                files = files.concat(c.files);
            });
            console.timeEnd('script');
            resolve(files);
        });
    });
};