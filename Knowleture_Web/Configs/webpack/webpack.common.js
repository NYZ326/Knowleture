const path = require('path');
const webpack = require('webpack');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const helpers = require('./../helper');

const isProd = process.env.NODE_ENV === 'production';
const ROOT = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        polyfills: './ClientApp/polyfills.ts',
        vendor: './ClientApp/vendor.ts',
        app: './ClientApp/main.ts'
    },
    resolve: {
        modules: [path.join(ROOT, 'ClientApp'), 'node_modules'],
        extensions: ['.ts', '.js', '.json'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'angular-router-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    },
                    {
                        loader: 'source-map-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|scss)$/,
                exclude: '/node_modules/',
                loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }))
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=images/[name]-[hash:6].[ext]'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'sprite-[hash:6].svg'
                }
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(@angular|es5)/,
            helpers.root('./ClientApp'),
            {}
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new SpriteLoaderPlugin(),
    ]
}