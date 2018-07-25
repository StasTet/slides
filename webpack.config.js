const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // настройки webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        stats: 'minimal'
    },
    devtool: 'eval',
    plugins: [
        // плагин для  генерация шаблона в /build/
        new HtmlWebpackPlugin({
            title: 'Slides',
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            template: './public/index.html'
        }),
        // плагин для генерации отдельного .css файла в /build/
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=images/', // размещение изображений в /build/images
                    'image-webpack-loader' // оптимизация изображений
                ]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=fonts/' // размещение шрифтов в /build/fonts
                ]
            }
        ]
    },
};
