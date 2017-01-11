'use strict';

// npm i -D webpack-dev-server

const webpack = require('webpack');
const merge = require('webpack-merge');
module.exports = merge({},require('./server'), {
  devServer: {
    historyApiFallback: true // SPA作るときはtrueに
  }
});