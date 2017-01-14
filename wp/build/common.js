'use strict';
const path = require('path');
module.exports = {
  devtool: '#source-map',
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: "assets/js/[name].js",
    jsonpFunction: 'fr',
    library: '[name]_library'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx' , '.sass', '.scss', '.ejs', '.html'],
    modules: [
      path.join(process.cwd(),'src'),
      path.join(process.cwd(),'node_modules')
    ]
  },
  stats: 'minimal',
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  }
};