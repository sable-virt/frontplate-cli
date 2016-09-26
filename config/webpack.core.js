'use strict';
const webpack = require("webpack");
const webpackConfig = {
    entry: {
        'app': './src/js/app.js'
    },
    output: {
        path: 'public/assets/js',
        publicPath: '/assets',
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    resolve: {
        alias: {
            // 'power-assert': 'power-assert/build/power-assert'
        },
        modulesDirectories: [
            'node_modules',
            'src'
        ]
    },
    eslint: {
        configFile: '.eslintrc',
        failOnError: true
    }
};

module.exports = webpackConfig;