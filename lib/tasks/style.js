'use strict';

const Rx = require('rxjs');
const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const postcss = require('postcss');
const sasslint = require('sass-lint');
const ora = require('ora');
const util = require('../util');
const timer = require('../timer');

/**
 * style tasks (sass/css)
 * @param pattern{string} glob pattern string
 * @param dest{string} dest path
 * @param plugins{PostCSSPlugin[]} Array of plugins
 * @returns {Rx.Observable}
 */
module.exports = function(pattern,dest,plugins) {
    timer.start('style');
    const spinner = ora('[build] style').start();
    lint();


    let processor = postcss(plugins || []);
    let files = util.getPath(pattern);
    files = files.filter((filepath) => {
        return (path.basename(filepath).charAt(0) !== '_');
    });

    let observables = files.map((filepath) => {
        let outputPath = util.destPath(pattern,dest,filepath,'.css');
        return parse(processor,filepath,outputPath);
    });
    let obs = Rx.Observable.combineLatest(observables).share();
    obs.subscribe(() => {
        spinner.succeed();
        timer.end('style');
    },() => {
        spinner.fail();
    });
    return obs;
};

/**
 * SASS Lint
 */
function lint() {
    let configPath = '.sass-lint.yml';
    let result = sasslint.lintFiles(null, {},configPath);
    sasslint.outputResults(result);
}

/**
 * scss to css
 * @param processor{PostCSSProcessor} postcss processor object
 * @param filepath{string} scss file path
 * @param outputPath{string} dest path
 * @returns {Rx.Observable}
 */
function parse(processor,filepath,outputPath) {
    return Rx.Observable.create((observer) => {
        sass.render({
            file: filepath,
            outputStyle: 'compact',
            sourceMap: true,
            outFile: outputPath
        }, function (e, result) {
            if (e) return observer.error(e);
            let basename = path.basename(outputPath);
            processor.process(result.css.toString(), {
                to: basename,
                map: result.map ? {
                    annotation: `maps/${basename}.map`,
                    prev:result.map.toString()
                }:null
            }).then(function (result) {
                output(outputPath,result).subscribe((res) => {
                    observer.next(res);
                },(e) => {
                    observer.error(e);
                });
            });
        });
    });
}

/**
 * output css & map
 * @param outputPath{string} dest path
 * @param result{PostCSSResultObject}
 * @returns {Rx.Observable}
 */
function output(outputPath,result) {
     let cssObs = Rx.Observable.create((observer) => {
         fs.outputFile(outputPath, result.css,(err) => {
             if (err) return observer.error(err);
             observer.next(outputPath);
         });
     });
    if (result.map) {
        let basename = path.basename(outputPath);
        let map = path.join(path.dirname(outputPath),'maps',`${basename}.map`);
        let mapObs = Rx.Observable.create((observer) => {
            fs.outputFile(map, result.map, (err) => {
                if (err) return observer.error(err);
                observer.next(map);
            });
        });
        cssObs = cssObs.combineLatest(mapObs);
    }
    return cssObs;
}