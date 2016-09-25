'use strict';
const Rx = require('rxjs');
const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const ora = require('ora');
const chalk = require('chalk');
const lint = require('htmlhint').HTMLHint;
const timer = require('../timer');
const util = require('../util');

/**
 * ejs render
 * @param filepath{string} input file path
 * @param outputPath{string} output path
 * @param data{object} ejs param object
 * @param options{object} ejs options
 * @returns {Rx.Observable}
 */
function render(filepath,outputPath,data,options) {
    options = options || {};
    return Rx.Observable.create((observer) => {
        ejs.renderFile(filepath, data, options, (err, str) => {
            if (err) return observer.error(err);
            let messages = lint.format(lint.verify(str,options.rules),{colors: true});
            if (messages.length > 0) {
                console.log(chalk.yellow.bold('\nHTML WARNING'));
            }
            messages.forEach((message) => {
                console.log(message);
            });
            fs.outputFile(outputPath, str, options, (err) => {
                if (err) return observer.error(err);
                observer.next(outputPath);
            });
        });
    });
}

/**
 * HTML Parse task
 * @param pattern{string} glob pattern string
 * @param dest{string} dest path
 * @param data{object} ejs param object
 * @param options{object} ejs options(https://www.npmjs.com/package/ejs)
 * @returns {Rx.Observable}
 */
module.exports = function(pattern,dest,data,options) {
    timer.start('html');
    const spinner = ora('[build] html').start();
    let files = util.getPath(pattern);
    files = files.filter((filepath) => {
        return (path.basename(filepath).charAt(0) !== '_');
    });
    let observables = files.map((filepath) => {
        let outputPath = util.destPath(pattern,dest,filepath,'.html');
        return render(filepath,outputPath,data,options);
    });
    let obs = Rx.Observable.combineLatest(observables).share();
    obs.subscribe(() => {
        spinner.succeed();
        timer.end('html');
    },() => {
        spinner.fail();
    });
    return obs;
};