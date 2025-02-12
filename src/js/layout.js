import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Agencia } from "./views/agencia";
import { Servicios } from "./views/servicios";
import { Blog } from "./views/blog";
import { BlogPost } from "./views/blogPost";
import { Contactanos } from "./views/contactanos";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const NavbarController = ({ setIsNavbarVisible }) => {
    const location = useLocation();

    useEffect(() => {
        setIsNavbarVisible(true); // 🔥 Reactivar la navbar al cambiar de ruta
    }, [location, setIsNavbarVisible]);

    return null; // No renderiza nada, solo ejecuta la lógica
};

const Layout = () => {
    const basename = process.env.NODE_ENV === "production" ? process.env.BASENAME || "" : "";
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    return (
        <BrowserRouter basename={basename}>
            <div className="app-container">
                <NavbarController setIsNavbarVisible={setIsNavbarVisible} />
                <ScrollToTop>
                    <Navbar isVisible={isNavbarVisible} />
                    <Routes>
                        <Route path="/" element={<Home onScroll={setIsNavbarVisible} />} />
                        <Route path="/agencia" element={<Agencia onScroll={setIsNavbarVisible} />} />
                        <Route path="/servicios" element={<Servicios onScroll={setIsNavbarVisible} />} />
                        <Route path="/blog" element={<Blog onScroll={setIsNavbarVisible} />} />
                        <Route path="/blog/:slug" element={<BlogPost onScroll={setIsNavbarVisible} />} />
                        <Route path="/contactanos" element={<Contactanos onScroll={setIsNavbarVisible} />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </div>
            
            {/* 🔥 Footer FUERA de app-container */}
            <Footer />
        </BrowserRouter>
    );
};

export default injectContext(Layout);
