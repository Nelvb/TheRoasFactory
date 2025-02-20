const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3000;

// Configurar WebSocket según el entorno
let webSocketOptions = false; // Por defecto, desactivado

console.log('BASENAME:', process.env.BASENAME);

// Solo para Gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  webSocketOptions = {
    protocol: 'wss',
    hostname: `${port}-${host}`,
    pathname: '/ws',
  };
}

// Solo para Codespaces - Desactiva WebSocket por completo
if (process.env.CODESPACE_NAME) {
  webSocketOptions = false;
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    client: webSocketOptions ? { webSocketURL: webSocketOptions } : false, // Aplica la configuración solo si es válida
    static: [
      { directory: path.resolve(__dirname, "dist") },
      { directory: path.resolve(__dirname, "public") }
    ],
    open: false, // No abrir automáticamente el navegador
  },
  plugins: []
});
