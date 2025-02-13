import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const currentYear = new Date().getFullYear(); // Año dinámico

    useEffect(() => {
        const checkContainer = setInterval(() => {
            const mainContainer = document.querySelector(".main-container") ||
                document.querySelector(".main-container-blog");

            if (mainContainer) {
                clearInterval(checkContainer);

                const handleScroll = () => {
                    const scrollTop = mainContainer.scrollTop;
                    const scrollHeight = mainContainer.scrollHeight;
                    const clientHeight = mainContainer.clientHeight;

                    setIsVisible(scrollTop + clientHeight >= scrollHeight - 10);
                };

                mainContainer.addEventListener("scroll", handleScroll);
                return () => mainContainer.removeEventListener("scroll", handleScroll);
            }
        }, 100);

        return () => clearInterval(checkContainer);
    }, [location.pathname]);

    useEffect(() => {
        setIsVisible(false);
    }, [location.pathname]);

    return (
        <footer className={`footer ${isVisible ? "visible" : ""}`}>
            <div className="footer-container">

                {/* 🔹 LOGO alineado a la izquierda */}
                <div className="footer-logo">
                    <img src="https://res.cloudinary.com/dgyz3ge7g/image/upload/v1739401895/vemixvhw5xkd6ounjuck.png"
                        alt="The Roas Factory"
                    />
                </div>

                {/* 🔹 ENLACES al centro */}
                <div className="footer-links">
                    <a href="/privacidad">Política de privacidad</a>
                    <a href="/aviso-legal">Aviso legal</a>
                    <a href="/cookies">Política de cookies</a>
                </div>

                {/* 🔹 CONTACTO alineado a la derecha */}
                <div className="footer-contact">
                    <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a>
                    <p>+34 647 828 838</p>
                    <a href="https://wa.me/34647828838" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>

            </div>

            {/* 🔹 Copyright dinámico */}
            <div className="footer-copy">
                <p>© {currentYear} The Roas Factory. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
