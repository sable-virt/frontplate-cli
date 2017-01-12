'use strict';

// npm i -D webpack-dev-server

const webpack = require('webpack');
module.exports = {
  devServer: {
    contentBase: 'public',
    hot: (process.env.NODE_ENV !== 'production'),
    open: true,
    historyApiFallback: false, // SPA作るときはtrueに
    stats: 'minimal'
  }
};