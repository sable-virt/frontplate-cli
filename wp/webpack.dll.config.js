'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
let conf = Object.assign({},require('./webpack.config'));

module.exports = merge({
  output: conf.output,
  module: conf.module,
  resolve: conf.resolve
},{
  entry: {
    vendor: ['./src/js/vendor.js']
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: __dirname
    }),
    new webpack.DllPlugin({
      context: __dirname,
      path: '[name]-manifest.json',
      name: '[name]_library'
    }),
  ],
  performance: {
    hints: false
  }
});