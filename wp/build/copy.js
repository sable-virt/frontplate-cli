'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      // {from:'path/from/*.txt, to: 'path/to'}
    ])
  ]
};