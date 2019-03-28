const path = require('path');
const { join: pathJoin } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: pathJoin(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8081
    }
}