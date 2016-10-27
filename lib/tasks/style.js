'use strict';

const Rx = require('rxjs');
const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const postcss = require('postcss');
const sasslint = require('sass-lint');
const ora = require('ora');
const frontnote = require('frontnote');
const util = require('../util');
const timer = require('../timer');

/**
 * style tasks (sass/css)
 * @param config{object} style tasks config
 * @returns {Rx.Observable}
 */
module.exports = function(config) {
    timer.start('style');
    const spinner = ora('[build] style').start();
    lint();

    let processor = postcss(config.plugins || []);
    let files = util.getPath(config.src);
    files = files.filter((filepath) => {
        return (path.basename(filepath).charAt(0) !== '_');
    });

    let observables = files.map((filepath) => {
        let outputPath = util.destPath(config.src,config.dest,filepath,'.css');
        return parse(processor,filepath,outputPath,config);
    });

    let fn = new frontnote(config.styleguide || {});
    observables.push(Rx.Observable.create((obs) => {
        fn.render(config.src).subscribe(() => {
            obs.next([]);
        },() => {
            obs.complete()
        },(e) => {
            obs.error(e)
        });
    }));

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
    let configPath = path.join(process.cwd(),'.sass-lint.yml');
    if (!util.exists(configPath)) {
        configPath = path.join(__dirname,'../../.sass-lint.yml');
    }
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
function parse(processor,filepath,outputPath,config) {
    return Rx.Observable.create((observer) => {
        let sourcemap = config.hasOwnProperty('sourceMap') ? config.sourceMap : true;
        sass.render({
            file: filepath,
            outputStyle: config.outputStyle || 'compact',
            sourceMap: sourcemap ? true : false,
            outFile: sourcemap ? outputPath : null
        }, (e, result) => {
            if (e) return observer.error(e);
            let basename = path.basename(outputPath);
            processor.process(result.css.toString(), {
                to: basename,
                map: result.map ? {
                    annotation: `maps/${basename}.map`,
                    prev:result.map.toString()
                }:null
            }).then((result) => {
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