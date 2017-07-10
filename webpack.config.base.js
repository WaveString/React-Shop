require('localenv');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.API_URL': JSON.stringify(process.env.API_URL)
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: false
        }),
        new CopyWebpackPlugin([
            { from: './static/images', to: './images' }
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: /src/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style',
                    'css?modules&importLoaders=1&localIdentName=[folder]__[local]-[hash:base64:5]!postcss'),
                include: /src/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot)$/,
                loader: 'url?name=[name].[ext]&limit=8192',
                include: /src/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot)$/,
                loader: 'file?name=[name].[ext]&limit=8192',
                include: /static\/images/
            }
        ]
    },
    postcss() {
        return [
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    }
};
