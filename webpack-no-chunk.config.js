
const merge = require('webpack-merge');
const common = require('./webpack-common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    entry: {
        index: path.resolve('./app/static/index.js')
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: path.resolve('index.html'),
            title: 'CHUNKS',
        })
    ]
});

