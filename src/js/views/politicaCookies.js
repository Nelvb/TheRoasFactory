import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/politicaCookies.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const PoliticaCookies = ({ onScroll }) => {
    const cookiesRef = useRef(null);
    useNavbarScroll(onScroll, cookiesRef);

    const navigate = useNavigate();

    return (
        <div className="main-container cookies" ref={cookiesRef}>
            <Helmet>
                <title>Política de Cookies | The Roas Factory</title>
                <meta name="description" content="Consulta nuestra Política de Cookies para conocer cómo gestionamos la información de navegación en The Roas Factory." />
            </Helmet>

            <div className="content">
                <h1>Política de Cookies</h1>

                <h2>1. ¿Qué son las Cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en el navegador del usuario cuando visita un sitio web. Estas permiten recordar información sobre la navegación, preferencias del usuario y mejorar la experiencia en la web.</p>

                <h2>2. Uso de Cookies en este Sitio Web</h2>
                <p>Actualmente, <strong>The Roas Factory</strong> no utiliza cookies propias ni de terceros que requieran el consentimiento del usuario.</p>
                <p>Si en el futuro se implementa el uso de cookies para mejorar el servicio, la presente política será actualizada e informaremos a los usuarios de los cambios.</p>

                <h2>3. Gestión y Desactivación de Cookies</h2>
                <p>Como usuario, puedes configurar tu navegador para bloquear o eliminar las cookies almacenadas en tu dispositivo. A continuación, te dejamos enlaces a la configuración de los navegadores más populares:</p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/Eliminar%20cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                </ul>

                <h2>4. Modificación de la Política de Cookies</h2>
                <p><strong>The Roas Factory</strong> se reserva el derecho de modificar esta Política de Cookies para adaptarla a novedades legislativas o a cambios en la operativa del sitio web.</p>
                <p>Se recomienda a los usuarios revisar periódicamente esta política para estar informados de posibles modificaciones.</p>

                <h2>5. Contacto</h2>
                <p>Si tienes dudas sobre nuestra Política de Cookies, puedes contactarnos en <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a>.</p>

                <button className="back-button-cookies" onClick={() => navigate(-1)}>← Volver atrás</button>
            </div>
        </div>
    );
};
