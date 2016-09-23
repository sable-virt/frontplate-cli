'use strict';
const webpack = require("webpack");
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const webpackConfig = {
  entry: {
    'app': './src/js/app.js'
  },
  output: {
    path: 'public/assets/js',
    publicPath: '/assets',
    filename: "[name].js",
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude:/Spec\.js$/i, loaders: ['eslint'] }
    ],
    loaders: [
      { test: /\.html$/, exclude:/node_modules/, loaders: ['html'] },
      { test: /Spec\.js$/i, exclude:/node_modules/, loaders: ['webpack-espower','babel'] },
      { test: /\.jsx?$/, exclude:/node_modules/, loaders: ['babel'] }
    ]
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
      },
    }),
    //new webpack.optimize.CommonsChunkPlugin('app','app.js'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnError: true
  }
};

module.exports = webpackConfig;