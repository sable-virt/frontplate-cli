'use strict';

const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const postcss = require('postcss');
const sasslint = require('sass-lint');
const ora = require('ora');
const util = require('../lib/util');

module.exports = function(pattern,dest,plugins) {
    console.time('style');
    const spinner = ora('[build] style').start();
    lint();
    let processor = postcss(plugins || []);
    let files = util.getPath(pattern);
    let promises = files.map((filepath) => {
        let outputPath = util.destPath(pattern,dest,filepath,'.css');
        return parse(processor,filepath,outputPath);
    });
    Promise.all(promises).then(() => {
        spinner.succeed();
        console.timeEnd('style');
    },() => {
        spinner.fail();
    });
    return Promise.all(promises);
};

function lint() {
    let configPath = '.sass-lint.yml';
    let result = sasslint.lintFiles(null, {},configPath);
    sasslint.outputResults(result);
    sasslint.failOnError(result);
}

function parse(processor,filepath,outputPath) {
    return new Promise((resolve,reject) => {
        sass.render({
            file: filepath,
            outputStyle: 'compact',
            sourceMap: true,
            outFile: outputPath
        }, function (e, result) {
            if (e) return reject(e);
            let basename = path.basename(outputPath);
            processor.process(result.css.toString(), {
                to: basename,
                map: result.map ? {
                    annotation: `maps/${basename}.map`,
                    prev:result.map.toString()
                }:null
            }).then(function (result) {
                output(outputPath,result).then(resolve,reject);
            });
        });
    });
}

function output(outputPath,result) {
    return new Promise((resolve,reject) => {
        let ended = false;
        function finish() {
            resolve(outputPath);
        }
        fs.outputFile(outputPath, result.css,(err) => {
            if (err) return reject(err);
            if (!result.map || ended) return finish();
            ended = true;
        });
        if (result.map) {
            let basename = path.basename(outputPath);
            let map = path.join(path.dirname(outputPath),'maps',`${basename}.map`);
            fs.outputFile(map, result.map, (err) => {
                if (err) return reject(err);
                if (ended) return finish();
                ended = true;
            });
        }
    });
}