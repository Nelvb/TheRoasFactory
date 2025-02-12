import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 Detecta cambios de ruta
import "../../styles/footer.css";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // 👈 Detecta cambios de vista

    useEffect(() => {
        const checkContainer = setInterval(() => {
            // ✅ Buscar si existe algún contenedor principal
            const mainContainer = document.querySelector(".main-container") || 
                                  document.querySelector(".main-container-blog");

            if (mainContainer) {
                clearInterval(checkContainer); // ✅ Detiene el intervalo cuando lo encuentra

                const handleScroll = () => {
                    const scrollTop = mainContainer.scrollTop;
                    const scrollHeight = mainContainer.scrollHeight;
                    const clientHeight = mainContainer.clientHeight;

                    // ✅ Si llegas al final del contenedor, muestra el footer
                    if (scrollTop + clientHeight >= scrollHeight - 10) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                };

                mainContainer.addEventListener("scroll", handleScroll);
                
                return () => mainContainer.removeEventListener("scroll", handleScroll);
            }
        }, 100); // ⏳ Revisa cada 100ms hasta encontrar el contenedor

        return () => clearInterval(checkContainer); // 🛑 Limpia el intervalo cuando el componente se desmonta
    }, [location.pathname]); // 👈 Se actualiza en cada cambio de ruta

    // 🔥 Obligar a que el footer se esconda inmediatamente al cambiar de vista
    useEffect(() => {
        setIsVisible(false);
    }, [location.pathname]);

    return (
        <footer className={`footer ${isVisible ? "visible" : ""}`}>
            <div className="footer-container">
                <div className="footer-links">
                    <a href="/privacidad">Política de privacidad</a>
                    <a href="/aviso-legal">Aviso legal</a>
                    <a href="/cookies">Política de cookies</a>
                </div>
                
                <div className="footer-contact">
                    <p>Contacto: 
                        <a href="mailto:theroasfactory@gmail.com"> therorasfactory@gmail.com</a> |
                        <a href="https://wa.me/34647828838" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
                    </p>
                </div>
                
                <div className="footer-copy">
                    <p>© 2024 The Roas Factory. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
