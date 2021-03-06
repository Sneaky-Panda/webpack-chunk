const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    entry: {
        login: path.resolve('./app/multiple/login/index.js'),
        home: path.resolve('./app/multiple/home/index.js')
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

            }
        },
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: path.resolve('index.html'),
            excludeChunks: ['home'],
            title: "Login"
        }),

        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'home.html',
            template: path.resolve('index.html'),
            excludeChunks: ['login'],
            title: "CHUNK"
        })
    ]
});


// commons: {
//     name: "common",
//         chunks: "all",
//         minChunks: 2,
//         maxInitialRequests: 5, // The default limit is too small to showcase the effect
//         minSize: 0
// },