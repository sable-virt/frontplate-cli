'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
const webpackConfig = merge(core, {
    devtool: '#source-map',
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
        ],
        loaders: [
            {test: /\.html$/, exclude: /node_modules/, loader: 'html'},
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['es2015', 'babel-preset-power-assert']}
            }
        ]
    },
    plugins: [],
});
module.exports = webpackConfig;