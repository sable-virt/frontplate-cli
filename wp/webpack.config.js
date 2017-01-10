'use strict';
const merge = require("webpack-merge");

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
module.exports = merge(
  require('./build/common'),
  require('./build/module'),
  require('./build/plugins'));