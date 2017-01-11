'use strict';
const merge = require('webpack-merge');
const loaderOptionsMerge = require('webpack-loader-options-merge');

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
module.exports = loaderOptionsMerge(
  merge({
      entry: {
        vendor: ['./src/vendor.ts']
      }
    },
    require('./build/common'),
    require('./build/typescript'),
    require('./build/angular'),
    require('./build/vendor')
  )
);