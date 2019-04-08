const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    entry: {
        index: path.resolve('./app/dynamic/index.js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 10
                },
                commons: {
                    name: "common",
                    chunks: "all",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
            }
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('index.html'),
            title: 'CHUNKS',
        })
    ]
});
