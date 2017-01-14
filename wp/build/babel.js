'use strict';

// npm i -D eslint-loader eslint babel babel-loader

const webpack = require('webpack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: true
        },
        babel: {
          presets: ['es2015']
        }
      }
    })
  ]
};