'use strict';

// npm i -D html-loader ejs-html-loader html-webpack-plugin
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loaders: ['html-loader', 'ejs-html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.ejs',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        ejsHtml: {
          title: 'For Whom the Bell Rings',
          context: {
            isProduction: (process.env.NODE_ENV === 'production')
          }
        }
      }
    })
  ]
};