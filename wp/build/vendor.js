'use strict';

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: process.cwd()
    }),
    new webpack.DllPlugin({
      context: process.cwd(),
      path: '[name]-manifest.json',
      name: '[name]_library'
    }),
  ],
  performance: {
    hints: false
  }
};
module.exports = config;