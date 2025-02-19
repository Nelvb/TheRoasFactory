const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('BASENAME:', process.env.BASENAME); // Aquí se imprime la variable

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: process.env.BASENAME || '/The_Roas_Factory/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public', 'posts.json'), to: 'posts.json' },
                { from: path.resolve(__dirname, 'public', '_redirects'), to: '.' },
                { from: path.resolve(__dirname, 'public', '404.html'), to: '.' },
                { from: path.resolve(__dirname, 'public', 'Logo_sin_fondo.png'), to: '.' }
            ]
        }),
        new Dotenv({
            path: './.env',
            safe: true,
            systemvars: true
        })
    ]
});
