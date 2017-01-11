'use strict';
const merge = require("webpack-merge");
const loaderOptionsMerge = require('webpack-loader-options-merge');
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */

console.log(process.env.NODE_ENV);
module.exports = loaderOptionsMerge(
  merge(
    {
      entry: {
        main: [
          './src/assets/js/main',
          './src/assets/css/style.scss'
        ]
      }
    },
    require('./build/common'),
    process.env.NODE_ENV === 'production' ? require('./build/production') : require('./build/develop'),
    require('./build/server'),

    require('./build/html'),
    require('./build/babel'),
    require('./build/sass'),
    require('./build/json'),
    require('./build/copy')
  )
);