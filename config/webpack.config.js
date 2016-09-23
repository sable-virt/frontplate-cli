'use strict';
const webpack = require("webpack");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
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
  devtool: '#source-map',
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
      // ProgressBarPlugin()
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnError: true
  }
};

module.exports = webpackConfig;