'use strict';

// npm i -D html-loader ejs-html-loader html-webpack-plugin
const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "webpack",
      suppressSuccess: true
    }),
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(),
    //   manifest: path.join(process.cwd(),'vendor-manifest.json')
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: 'console.warn("This script is development version.");',
      raw: true,
      entryOnly: true,
      exclude: [/^(?!.*vendor\.(js|ts)x?$).+$/]
    })
  ]
};