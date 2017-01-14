'use strict';

// npm i -D eslint-loader eslint babel babel-loader
// require build/typescript,build/sass

const webpack = require('webpack');
const aot = (process.env.NODE_ENV === 'production');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: [
          'angular2-template-loader',
          `angular2-router-loader?aot=${aot}&genDir=src/aot-compiled/src/app`
        ]
      },
      {
        test: /\.component\.s(a|c)ss$/,
        loaders: [
          'raw-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      process.cwd()
    )
  ]
};