import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { IconsFloating } from "../../js/component/iconsFloating";
import "../../styles/contactanos.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const Contactanos = ({ onScroll }) => {
    const contactRef = useRef(null);
    useNavbarScroll(onScroll, contactRef);

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado con éxito");
        // Aquí puedes agregar lógica para enviar los datos a un backend o a un servicio de email.
    };

    const whatsappNumber = "34600000000"; // Reemplazar con el número real en formato internacional

    return (
        <>
        {/* 🔹 Iconos flotantes fuera del main-container */}
        <IconsFloating />
        <div className="main-container" ref={contactRef}>
            <Helmet>
                <title>Contáctanos | The Roas Factory</title>
                <meta name="description" content="Contacta con The Roas Factory para estrategias de marketing digital, publicidad y branding. Escríbenos por email o WhatsApp y potencia tu marca." />
                <meta property="og:title" content="Contáctanos | The Roas Factory" />
                <meta property="og:description" content="Hablemos sobre cómo llevar tu marca al siguiente nivel. Escríbenos por email o WhatsApp." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tu-sitio.com/contactanos" />
                <meta property="og:image" content="https://tu-sitio.com/logo.png" />

                {/* 🔹 Schema Markup JSON-LD para SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contáctanos",
                        "description": "Escríbenos para más información sobre marketing digital, publicidad y branding.",
                        "url": "https://tu-sitio.com/contactanos",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+34 600000000",
                            "contactType": "customer service",
                            "email": "info@tu-sitio.com"
                        }
                    })}
                </script>
            </Helmet>

            <section className="content">
                <h1>Contáctanos</h1>
                <p>¿Tienes dudas o quieres trabajar con nosotros? Escríbenos y te responderemos en breve.</p>
            </section>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} required></textarea>

                    <button type="submit" className="btn-submit">Enviar mensaje</button>
                </form>

                <div className="contact-options">
                    <h2>O contáctanos por WhatsApp</h2>
                    <p>Si prefieres, envíanos un mensaje directo a nuestro WhatsApp.</p>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                        <i className="fa-brands fa-whatsapp"></i> Chatear por WhatsApp
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};
