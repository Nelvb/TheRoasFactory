import React, { useState } from "react"; // Importa useState
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Agencia } from "./views/agencia";
import { Servicios } from "./views/servicios";
import { Blog } from "./views/blog";
import { Contactanos } from "./views/contactanos";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	const [isNavbarVisible, setIsNavbarVisible] = useState(true);

	return (
		<div className="app-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar isVisible={isNavbarVisible} />
					<Routes>
						<Route path="/" element={<Home onScroll={setIsNavbarVisible} />} />
						<Route path="/agencia" element={<Agencia onScroll={setIsNavbarVisible} />} />
						<Route path="/servicios" element={<Servicios onScroll={setIsNavbarVisible} />} />
						<Route path="/blog" element={<Blog onScroll={setIsNavbarVisible} />} />
						<Route path="/contactanos" element={<Contactanos onScroll={setIsNavbarVisible} />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
