import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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
                <a href="/" className="footer-logo">
                    <img src="https://res.cloudinary.com/dgyz3ge7g/image/upload/v1739401895/vemixvhw5xkd6ounjuck.png"
                        alt="The Roas Factory"
                    />
                </a>

                <div className="footer-contact">
                    <a href="mailto:theroasfactory@gmail.com" className="contact-link">
                        <i className="fa-solid fa-envelope"></i> theroasfactory@gmail.com
                    </a>
                    <a href="tel:+34647828838" className="contact-link phone-link">
                        <i className="fa-solid fa-phone"></i> +34 647 828 838
                    </a>
                    <a href="https://wa.me/34647828838" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">© {currentYear} The Roas Factory. Todos los derechos reservados.</div>
                <div className="footer-links">
                    <Link to="/privacidad">Política de privacidad</Link> |
                    <Link to="/avisoLegal"> Aviso legal</Link> |
                    <Link to="/politicaCookies"> Política de cookies</Link>
                </div>
            </div>
        </footer>
    );

};
