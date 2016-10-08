'use strict';
const core = require('./core.config');

module.exports = {
    src: 'src/sass/**/*.scss',  // 読み込むscss
    dest: core.basePath + '/assets/css',  // 出力先
    outputStyle: 'compact',
    sourceMap: true,
    plugins: [  // postcssプラグイン
        require('autoprefixer')({   // autoprefixer(https://github.com/postcss/autoprefixer)
            browsers: [
                'last 3 version',
                'ie >= 9',
                'Android >= 4.0'
            ]
        })
    ],
    styleguide: {
        title: 'StyleGuide',
        verbose: false,
        clean: true,
        params: {},
        css: '../public/assets/css/style.css',
        // script: '../public/assets/js/app.js',
    }
};
