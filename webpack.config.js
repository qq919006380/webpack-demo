const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',

        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',

    },

};