import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo_sin_fondo.webp";
import "../../styles/navbar.css";

export const Navbar = ({ isVisible }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".hamburger-menu")) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [menuOpen]);

    return (
        <nav className={`navbar ${!isVisible ? "hidden" : ""}`}>
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="The Roas Factory" />
            </Link>
            <div className="desktop-menu">
                <Link to="/agencia" className="nav-link">Agencia</Link>
                <Link to="/servicios" className="nav-link">Servicios</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contactanos" className="nav-link">Contáctanos</Link>
            </div>

            {/* Botón hamburguesa flotante (solo en móviles) */}
            <button
                className={`hamburger-menu ${menuOpen ? "hidden" : ""}`}
                onClick={() => setMenuOpen(true)}
            >
                ☰
            </button>


            {/* Menú desplegable en móviles */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <button className="close-menu" onClick={() => setMenuOpen(false)}>✖</button>
                <Link to="/agencia" className="mobile-link" onClick={() => setMenuOpen(false)}>Agencia</Link>
                <Link to="/servicios" className="mobile-link" onClick={() => setMenuOpen(false)}>Servicios</Link>
                <Link to="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}>Blog</Link>
                <Link to="/contactanos" className="mobile-link" onClick={() => setMenuOpen(false)}>Contáctanos</Link>
            </div>
        </nav>
    );
};
