'use strict';
const merge = require("webpack-merge");
const loaderOptionsMerge = require('webpack-loader-options-merge');

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */

module.exports = loaderOptionsMerge(
  merge(
    {
      entry: {
        main: process.env.NODE_ENV === 'production' ? [
            './src/main-aot',
            './src/assets/sass/style.scss'
          ] : [
            './src/main',
            './src/assets/sass/style.scss'
          ]
      },
    },
    require('./build/common'),
    process.env.NODE_ENV === 'production' ? require('./build/production') : require('./build/develop'),
    require('./build/spa-server'),

    require('./build/html'),
    require('./build/typescript'),
    require('./build/sass'),
    require('./build/angular'),
    require('./build/json'),
    require('./build/copy')
  )
);
