// Importar React y ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Incluir los estilos
import "../styles/index.css";

// Importar el componente principal de la aplicación
import Layout from './layout.js';

// Verificar si el elemento con id "app" existe
const appElement = document.getElementById("app");

if (appElement) {
    // Crear la raíz de React
    const root = createRoot(appElement);

    // Renderizar la aplicación
    root.render(
        <React.StrictMode>
            <Layout />
        </React.StrictMode>
    );
}
