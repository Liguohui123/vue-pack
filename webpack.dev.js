const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: { // +++
        splitChunks: { // +++
            chunks: 'initial' // +++ initial(初始块)、async(按需加载块)、all(全部块)

        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|pneg|gif|bmp)$/,
                use: 'url-loader',
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: [
                    'file-loader',
                    'url-loader'

                ]
            }
        ]
    },
})