'use strict';
const path = require('path');
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const DEST_PATH = 'public';
module.exports = {
  devtool: '#source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: path.resolve(DEST_PATH),
    publicPath: '/',
    filename: "assets/js/[name].js",
    sourceMapFilename: 'assets/js/maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      'src',
      "node_modules"
    ],
  },
  devServer: {
    contentBase: DEST_PATH,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|component\.scss)/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','postcss-loader','sass-loader']
        })
      },
      {
        test: /\.component\.scss$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.component\.html$/,
        exclude: /(node_modules|component\.html)/,
        loader: 'raw-loader'
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
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new CleanWebpackPlugin(['public'], {
      exclude: []
    }),
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
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: true
        },
        babel: {
          presets: ['es2015']
        },
        sassLoader: {
          includePaths: [
            'node_modules'
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
      exclude: [/^(?!.*(js|ts)x?$).+$/]
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  }
};