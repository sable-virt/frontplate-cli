'use strict';
// Karma configuration
// Generated on Tue Jan 10 2017 16:08:44 GMT+0900 (JST)

const merge = require('webpack-merge');
const webpackConfig = merge({},require('./webpack.config'));
delete webpackConfig.entry;
delete webpackConfig.output;
const UNUSED_PLUGINS = [
  'HtmlWebpackPlugin',
  'DllReferencePlugin',
  'WebpackBuildNotifierPlugin',
  'BannerPlugin'
];
let len = webpackConfig.plugins.length;
while(len--) {
  let p =  webpackConfig.plugins[len];
  if (UNUSED_PLUGINS.indexOf(p.constructor.name) !== -1) {
    webpackConfig.plugins.splice(len,1);
  }
}
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      `./src/**/*.spec.js`
    ],

    // list of files to exclude
    exclude: [
      'node_modules'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*spec.js': ['webpack']
    },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

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
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};