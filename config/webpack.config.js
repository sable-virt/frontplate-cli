'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'webpack-espower-loader',
                    'babel?presets[]=es2015'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            assert: "power-assert",
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': 'development'
        }),
        new webpack.BannerPlugin({
            banner: 'console.warn("This script is development version.");',
            raw: true
        })
    ]
});
module.exports = webpackConfig;