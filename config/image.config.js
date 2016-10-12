'use strict';
const core = require('./core.config');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

module.exports = {
    src: 'src/images/**/*.{gif,jpg,png}',  // 読み込むイメージ
    dest: core.basePath + '/assets/images',        // 出力先
    options: {
        plugins: [  // 圧縮プラグイン
            imageminMozjpeg({quality: 90}),
            imageminPngquant({quality: '80-90'})
        ]
    }
};