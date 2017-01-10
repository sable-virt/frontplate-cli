'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        exclude: /node_modules/,
        loaders: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|\.component\.scss)/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['source-map-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loaders: ['html-loader', 'ejs-html-loader']
      },
      {
        test: /\.(ttf|woff|svg|gif|jpg|png)$/,
        loader: 'file-loader?name=assets/[path][name].[ext]&context=./src'
      },
    ]
  }
};