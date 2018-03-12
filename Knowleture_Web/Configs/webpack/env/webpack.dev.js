const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./../webpack.common.js');
const helpers = require('./../../helper.js');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname, '../../../');

console.log('****** USING DEV ******');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    performance: {
        hints: false
    },

    output: {
        path: ROOT + '/wwwroot/build/',
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[id].chunk.js',
        publicPath: '/build/'
    },

    devServer: {
        historyApiFallback: true, 
        contentBase: path.join(ROOT, '/wwwroot/'),
        watchOptions: {
            aggregateTimout: 300,
            poll: 1000
        }
    },

    plugins: [
        new webpack.NamedModulesPlugin(),

        new ExtractTextPlugin('css/styles.css'),

        new CleanWebpackPlugin(
            [
                './wwwroot/**',
            ],
            {
                root: ROOT
            }
        ),

        new CopyWebpackPlugin([
            { context: 'ClientApp/assets/images', from: '**/*.*', to: 'images/', flatten: false },
            { context: 'ClientApp/assets/styles/vendor', from: '*.*', to: 'css/', flatten: false }
        ])
    ]
});