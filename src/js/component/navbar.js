import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo_sin_fondo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand mb-0 h1">
                <img src={logo} alt="The Roas Factory" />
            </Link>
            <div className="ml-auto d-flex">
                <Link to="/agencia" className="nav-link">Agencia</Link>
                <Link to="/servicios" className="nav-link">Servicios</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contactanos" className="nav-link">Contáctanos</Link>
            </div>
        </nav>
    );
};
