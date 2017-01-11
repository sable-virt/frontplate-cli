'use strict';

// npm i -D json-loader

module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  }
};