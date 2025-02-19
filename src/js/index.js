// Importar React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Incluir los estilos
import "../styles/index.css";

// Importar el componente principal de la aplicación
import Layout from './layout.js';

// Verificar si el elemento con id "app" existe
const appElement = document.getElementById("app");

if (appElement) {
    console.log("✅ Se encontró el elemento con id 'app'. Montando React...");
    const root = ReactDOM.createRoot(appElement);
    root.render(
        <React.StrictMode>
            <Layout />
        </React.StrictMode>
    );
} else {
    console.error("❌ No se encontró el elemento con id 'app'. Revisa index.html");
}
