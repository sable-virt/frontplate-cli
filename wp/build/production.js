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
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(),
    //   manifest: path.join(process.cwd(),'vendor-manifest.json')
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: true
    }
  ));
}
module.exports = config;