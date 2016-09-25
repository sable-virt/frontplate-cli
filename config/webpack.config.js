'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
const webpackConfig = merge(core,{
  devtool: '#source-map',
  plugins: []
});
module.exports = webpackConfig;