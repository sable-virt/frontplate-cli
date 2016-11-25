'use strict';
/**
 * karma conf
 * url: https://karma-runner.github.io/1.0/config/configuration-file.html
 */

const webpackConfig = require('./webpack.config');
module.exports = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        `${FRP_SRC}/js/**/*spec.js`
    ],
    preprocessors: {
        '**/*spec.js': ['webpack','babel']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        quiet: true,
        stats: 'errors-only'
    },
    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'
        }
    },
    exclude: [],
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
    //'OFF' | 'ERROR' | 'INFO' | 'DEBUG'
    logLevel: 'INFO',

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

};
