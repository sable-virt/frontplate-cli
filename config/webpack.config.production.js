'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
/**
 * webpack config for production
 * url: https://webpack.github.io/docs/configuration.html
 */
module.exports = merge(core, {
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
});