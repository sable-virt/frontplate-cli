'use strict';
const path = require('path');

module.exports = {
  devtool: '#inline-source-map', // source-mapにするとjsのが消えてしまう
  entry: {
    main: [
      './src/js/main',
      './src/sass/style.scss'
    ]
  },
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: "assets/js/[name].js",
    sourceMapFilename: 'assets/js/maps/[name].map',
    jsonpFunction: 'fr',
    library: '[name]_library'
  },
  resolve: {
    modules: [
      'src',
      "node_modules"
    ],
  },
  devServer: {
    contentBase: 'public',
    hot: true
  },
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  }
};