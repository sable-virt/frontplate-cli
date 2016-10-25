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
 * @param config{object} html task config
 * @returns {Rx.Observable}
 */
module.exports = function(config) {
    timer.start('html');
    const spinner = ora('[build] html').start();
    let files = util.getPath(config.src);
    files = files.filter((filepath) => {
        return (path.basename(filepath).charAt(0) !== '_');
    });
    let observables = files.map((filepath) => {
        let outputPath = util.destPath(config.src,config.dest,filepath,'.html');
        return render(filepath,outputPath,config.params,config);
    });
    if (config.pages) {
        observables = observables.concat(config.pages.map((page) => {
            let outputPath = util.destPath(page.src,config.dest,page.name,'.html');
            return render(page.src,outputPath,page.params,config);
        }));
    }
    if (observables.length === 0) {
        return Rx.Observable.of([]);
    }
    let obs = Rx.Observable.combineLatest(observables).share();
    obs.subscribe(() => {
        spinner.succeed();
        timer.end('html');
    },(e) => {
        spinner.fail();
        console.error(chalk.red(e));
    });
    return obs;
};