'use strict';
const fs = require('fs-extra');
const path = require('path');
const Spritesmith = require('spritesmith');
const json2css = require('json2css');
const ora = require('ora');
const util = require('../lib/util');
const timer = require('../lib/timer');
const Rx = require('rxjs');

/**
 * sprite task
 * @param sprites{object[]} sprite config object
 * @returns {Rx.Observable}
 */
module.exports = function (sprites) {
    timer.start('sprite');
    const spinner = ora('[build] sprite').start();

    let observables = sprites.map((sprite) => {
        let src = util.getPath(sprite.src);
        return generate(src, sprite);
    });
    let obs = Rx.Observable.combineLatest(observables).share();
    obs.subscribe(() => {
        spinner.succeed();
        timer.end('sprite');
    },() => {
        spinner.fail();
    });
    return obs;
};

/**
 * generate sprite image & css
 * @param src{string} directory of sprites
 * @param config{object} spritesmith options(https://www.npmjs.com/package/spritesmith)
 * @returns {Rx.Observable}
 */
function generate(src, config) {
    return Rx.Observable.create((observer) => {
        Spritesmith.run({
            src: src,
            options: {
                padding: config.padding || 2,
                exportOpts: config.exportOpts || {},
                algorithm: config.algorithm || 'binary-tree',
                algorithmOpts: config.algorithmOpts || {}
            }
        }, (err, result) => {
            if (err) return observer.error(err);
            let spriteParams = Object.keys(result.coordinates).map((key) => {
                let data = result.coordinates[key];
                let ext = path.extname(key);
                let filename = path.basename(key, ext);
                return {
                    name: filename,
                    x: data.x,
                    y: data.y,
                    width: data.width,
                    height: data.height,
                    total_width: result.properties.width,
                    total_height: result.properties.height,
                    image: config.imgPath || 'images/sprite.png'
                };
            });
            output(result, spriteParams, config).subscribe((res) => {
                observer.next(res);
            }, (e) => {
                observer.error(e);
            });
        });
    });
}

function output(result, spriteParams, config) {
    let destImgPath = config.destImage || 'images/sprite.png';
    let destCSSPath = config.destCSS || 'src/scss/sprites/_sprite.scss';

    let filename = path.basename(destCSSPath,path.extname(destCSSPath));

    let css = json2css(spriteParams, {
        format: config.format || 'css',
        cssSelector: function (item) {
            return `${filename}-${item}`;
        }
    });


    let imgObs = Rx.Observable.create((observer) => {
        fs.outputFile(destImgPath, result.image, (err) => {
            if (err) return observer.error(err);
            observer.next(destImgPath);
        });
    });
    let cssObs = Rx.Observable.create((observer) => {
        fs.outputFile(destCSSPath, css, (err) => {
            if (err) return observer.error(err);
            observer.next(destCSSPath);
        });
    });
    return Rx.Observable.combineLatest(imgObs,cssObs);
}