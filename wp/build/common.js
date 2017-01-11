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
      'src',
      "node_modules"
    ],
  },
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  },
  stats: {
    // Add asset Information
    assets: true,
    // Add information about cached (not built) modules
    cached: true,
    // Add children information
    children: false,
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false,
    // Add built modules information to chunk information
    chunkModules: false,
    // Add the origins of chunks and chunk merging info
    chunkOrigins: false,
    // Add errors
    errors: true,
    // Add details to errors (like resolving log)
    errorDetails: true,
    // Add the hash of the compilation
    hash: false,
    // Add built modules information
    modules: false,
    // Add information about the reasons why modules are included
    reasons: true,
    // Add the source code of modules
    source: false,
    // Add timing information
    timings: true,
    // Add webpack version information
    version: false,
    // Add warnings
    warnings: true
  }
};