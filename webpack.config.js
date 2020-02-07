const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.export = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
                }
            }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" 
            }, {
                loader: "less-loader"
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        }
        )
    ]
}