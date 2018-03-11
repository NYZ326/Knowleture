const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./../webpack.common.js');
const helpers = require('./../../helper.js');

const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: ROOT + '/wwwroot/',
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[id].chunk.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),

        new ExtractTextPlugin('css/style.min.css'),

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        })
    ]
});