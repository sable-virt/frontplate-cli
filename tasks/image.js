'use strict';
const imagemin = require('imagemin');
const ora = require('ora');

module.exports = function (pattern, dest, options) {
    console.time('image');
    const spinner = ora('[build] copy').start();
    return new Promise((resolve, reject) => {
        imagemin([pattern], dest, options).then((files) => {
            spinner.succeed();
            console.timeEnd('image');
            resolve(files);
        }, (e) => {
            spinner.fail();
            reject(e);
        });
    });
};