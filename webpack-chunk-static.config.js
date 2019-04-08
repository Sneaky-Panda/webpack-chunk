const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    entry: {
        index: path.resolve('./app/static/index.js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 10
                }
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
















// commons: {
//     name:"common",
//         chunks: "all",
//         minChunks: 2,
//         maxInitialRequests: 5, // The default limit is too small to showcase the effect
//         minSize: 0 // This is example is too small to create commons chunks
// },