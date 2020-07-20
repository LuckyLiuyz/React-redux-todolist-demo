var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成build文件夹及文件：


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: path.resolve(APP_PATH, 'index.js')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    devServer: {
        inline: true, //实时刷新
        port: 3000,
    },
    module: {
        rules: [{
            test: /\.js$/, // babel 转换为兼容性的 js
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react'],  // 加入stage-0 尝试使用es7，
                }
            }
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于8KB 使用base64格式图片
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'React-redux-todolist-demo',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]

}
