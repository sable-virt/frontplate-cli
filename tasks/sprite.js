'use strict';
const fs = require('fs-extra');
const path = require('path');
const Spritesmith = require('spritesmith');
const json2css = require('json2css');
const ora = require('ora');
const util = require('../lib/util');

module.exports = function (sprites) {
    console.time('sprite');
    const spinner = ora('[build] sprite').start();
    let promises = sprites.map((sprite) => {
        let src = util.getPath(sprite.src);
        return generate(src, sprite);
    });
    Promise.all(promises).then(() => {
        spinner.succeed();
        console.timeEnd('sprite');
    },() => {
        spinner.fail();
    });
    return Promise.all(promises);
};

function generate(src, config) {
    return new Promise((resolve, reject) => {
        Spritesmith.run({
            src: src,
            options: {
                padding: config.padding || 2,
                exportOpts: config.exportOpts || {},
                algorithm: config.algorithm || 'binary-tree',
                algorithmOpts: config.algorithmOpts || {}
            }
        }, (err, result) => {
            if (err) return reject(err);
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
            output(result, spriteParams, config).then(resolve, reject);
        });
    });
}

function output(result, spriteParams, config) {
    let css = json2css(spriteParams, {
        'format': config.format || 'scss'
    });
    let destImgPath = config.destImage || 'images/sprite.png';
    let destCSSPath = config.destCSS || 'src/scss/sprites/_sprite.scss';

    return new Promise((resolve, reject) => {
        let ended = false;

        function finish() {
            resolve({
                image: destImgPath,
                css: destCSSPath
            });
        }

        fs.outputFile(destImgPath, result.image, (err) => {
            if (err) return reject(err);
            if (ended) return finish();
            ended = true;
        });
        fs.outputFile(destCSSPath, css, (err) => {
            if (err) return reject(err);
            if (ended) return finish();
            ended = true;
        });
    });
}