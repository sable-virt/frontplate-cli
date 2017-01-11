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