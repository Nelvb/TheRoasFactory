import React from "react";
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

	return (
		<div className="app-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar /> {/* La navbar se mantiene fuera de content-container */}
						<Routes>
						<Route path="/" element={<Home />} />
							<Route path="/agencia" element={<Agencia />} />
							<Route path="/servicios" element={<Servicios />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/contactanos" element={<Contactanos />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
