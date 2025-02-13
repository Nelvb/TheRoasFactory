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
        publicPath: '/The_Roas_Factory/'  // Asegura que la ruta en GitHub Pages sea correcta
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/posts.json', to: 'posts.json' } // Copia el JSON a dist
            ]
        }),
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});
