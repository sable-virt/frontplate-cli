'use strict';
const merge = require('webpack-merge');

module.exports = function (config) {
    let webpackConfig = merge({}, require('./webpack.config'));
    // entryをdeleteしないとwatch時に無駄なコンパイルが発生する
    delete webpackConfig.entry;
    // outputをdeleteしないとts-loader使った時などに、拡張子のない謎のファイルができることがある
    delete webpackConfig.output;
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/power-assert/build/power-assert.js',
            'node_modules/sinon/pkg/sinon.js',
            'src/js/**/*-spec.js'
        ],
        exclude: [],
        preprocessors: {
            'src/**/*-spec.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            //noInfo: true,
            quiet: true
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        client: {
            captureConsole: true
        },

        // web server port
        port: 9001,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
