const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/The_Roas_Factory/'  // Ruta base para GitHub Pages
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public', 'posts.json'), to: 'posts.json' }, // Copia el JSON a dist
                { from: path.resolve(__dirname, 'public', '_redirects'), to: '_redirects' } // Redirección para React Router en GitHub Pages
            ]
        }),
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});
