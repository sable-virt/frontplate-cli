'use strict';
const path = require('path');
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const DEST_PATH = 'public';
module.exports = {
  devtool: '#inline-source-map', // source-mapにするとjsのが消えてしまう
  entry: {
    main: [
      './src/js/main',
      './src/sass/style.scss'
    ]
  },
  output: {
    path: path.resolve(DEST_PATH),
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
    contentBase: DEST_PATH,  // New
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader','source-map-loader']
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|\.component\.scss)/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['source-map-loader','css-loader?sourceMap','postcss-loader?sourceMap','sass-loader?sourceMap']
        })
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loaders: ['html-loader','ejs-html-loader']
      },
      {
        test: /\.(ttf|woff|svg|gif|jpg|png)$/,
        loader: 'file-loader?name=assets/[path][name].[ext]&context=./src'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.ejs'
    }),
    new WebpackBuildNotifierPlugin({
      title: "webpack",
      suppressSuccess: true
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        eslint: {
          failOnError: true
        },
        babel: {
          presets: ['es2015']
        },
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src/sass'),
          ]
        },
        postcss: {
          plugins: [
            Autoprefixer({
              browsers: ['> 3% in JP']
            })
          ]
        }
      }
    }),
    new CopyWebpackPlugin([
      // {from:'path/from/*.txt, to: 'path/to'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.BannerPlugin({
      banner: 'console.warn("This script is development version.");',
      raw: true,
      entryOnly: true,
      exclude: [/^(?!.*vendor\.(js|ts)x?$).+$/]
    }),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   comments: false,
    //   sourceMap: true
    // })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  }
};