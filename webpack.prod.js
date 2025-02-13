const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        { from: path.resolve(__dirname, 'public/posts.json'), to: 'posts.json' }, // JSON de posts
        { from: path.resolve(__dirname, 'public/_redirects'), to: '.' }, // Archivo _redirects
        { from: path.resolve(__dirname, 'public/404.html'), to: '.' }, // Página 404
        { from: path.resolve(__dirname, 'public/favicon.ico'), to: '.' }, // Favicon
        { from: path.resolve(__dirname, 'public/Logo_sin_fondo.png'), to: '.' } // Logo
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'template.html', // Usa el template correcto
      filename: 'index.html', // Se genera en dist/
      inject: 'body'
    }),
    new Dotenv({
      safe: true,
      systemvars: true
    })
  ]
});
