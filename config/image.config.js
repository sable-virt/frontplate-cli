'use strict';
const imageminJpeg = require('imagemin-jpegoptim');
const imageminPng = require('imagemin-pngquant');

module.exports = {
    src: 'src/images/**/*.{gif,jpg,png}',  // 読み込むイメージ
    dest: FRP_DEST + '/assets/images',        // 出力先
    options: {
        plugins: [  // 圧縮プラグイン
            imageminJpeg({max: 95}),
            imageminPng({quality: '80-90'})
        ]
    }
};