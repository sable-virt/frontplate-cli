'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/style.css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production'
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
      context: path.join(__dirname,'../'),
      manifest: require('../vendor-manifest.json')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(__dirname,'../'),
        eslint: {
          failOnError: true
        },
        babel: {
          presets: ['es2015']
        },
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src/sass'),
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
    new webpack.HotModuleReplacementPlugin(),
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
  ]
};