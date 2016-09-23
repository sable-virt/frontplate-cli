'use strict';
const rimraf = require('rimraf');
const ora = require('ora');

module.exports = function(pattern,options) {
    console.time('clean');
    const spinner = ora('[build] clean').start();
    options = options || {};
    return new Promise((resolve,reject) => {
        rimraf(pattern,options,(e) => {
            if (e) {
                spinner.fail();
                return reject(e);
            }
            spinner.succeed();
            console.timeEnd('clean');
            resolve(pattern);
        });
    });
};