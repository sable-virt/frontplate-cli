'use strict';

// npm i -D html-loader ejs-html-loader html-webpack-plugin
const path = require('path');
const webpack = require('webpack');
const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: true
    })
  ]
};
module.exports = config;