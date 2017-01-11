'use strict';

// npm i -D style-loader css-loader postcss-loader sass-loader file-loader node-sass postcss autoprefixer extract-text-webpack-plugin
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        exclude: /(node_modules|\.component\.scss)/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?sourceMap', // CSS Moduleの場合 &modules をつける
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(ttf|woff|svg|gif|jpg|png)$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./src'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: process.cwd(),
        sassLoader: {
          sourceMap: true,
          includePaths: [
            path.resolve(process.cwd(), 'node_modules'),
            path.resolve(process.cwd(), './src/sass'),
          ]
        },
        postcss: {
          sourceMap: true,
          plugins: [
            autoprefixer({
              browsers: ['> 3% in JP']
            })
          ]
        }
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/style.css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production'
    })
  ]
};