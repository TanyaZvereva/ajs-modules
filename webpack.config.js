const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin ({
            filename:'[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['MiniCssExtractPlugin.loader', 'css-loader']
            }
        ]
    }
}

