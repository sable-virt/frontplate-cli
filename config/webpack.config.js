'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
const webpackConfig = merge(core, {
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015',
                    'webpack-espower'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            assert: "power-assert",
        })
    ],
});
module.exports = webpackConfig;