'use strict';
const fs = require('fs-extra');
const ejs = require('ejs');
const ora = require('ora');
const util = require('../lib/util');

function render(filepath,outputPath,data,options) {
    return new Promise((resolve,reject) => {
        ejs.renderFile(filepath, data, options, (err, str) => {
            if (err) return reject(err);
            fs.outputFile(outputPath, str, options, (err) => {
                if (err) return reject(err);
                resolve(outputPath);
            });
        });
    });
}

module.exports = function(pattern,dest,data,options) {
    console.time('html');
    const spinner = ora('[build] html').start();
    let files = util.getPath(pattern);
    let promises = files.map((filepath) => {
        let outputPath = util.destPath(pattern,dest,filepath,'.html');
        return render(filepath,outputPath,data,options);
    });
    Promise.all(promises).then(() => {
        spinner.succeed();
        console.timeEnd('html');
    },() => {
        spinner.fail();
    });
    return Promise.all(promises);
};