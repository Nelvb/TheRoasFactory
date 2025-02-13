import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { IconsFloating } from "../../js/component/iconsFloating";
import "../../styles/contactanos.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";
import emailjs from "emailjs-com";
import CustomAlert from "../../js/component/customAlert";

export const Contactanos = ({ onScroll }) => {
    const contactRef = useRef(null);
    useNavbarScroll(onScroll, contactRef);

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });
    const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.telefono || !formData.asunto || !formData.mensaje) {
            setAlert({ show: true, message: "Todos los campos son obligatorios", type: "error" });
            return;
        }

        emailjs.sendForm(
            "service_xn5h3pb", // Reemplazar con tu ID de servicio
            "template_q589ayq", // Reemplazar con tu ID de plantilla
            e.target,
            "HxsrmZcKRK5mPtoVp" // Reemplazar con tu public key
        )
            .then(() => {
                setAlert({ show: true, message: "Mensaje enviado con éxito", type: "success" });
                setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
            })
            .catch(() => {
                setAlert({ show: true, message: "Error al enviar el mensaje. Intenta de nuevo", type: "error" });
            });
    };

    const whatsappNumber = "34647828838";

    return (
        <>
            <IconsFloating />
            <div className="main-container" ref={contactRef}>
                <Helmet>
                    <title>Contáctanos | The Roas Factory</title>
                    <meta name="description" content="Contacta con The Roas Factory para estrategias de marketing digital, publicidad y branding. Escríbenos por email o WhatsApp y potencia tu marca." />
                </Helmet>

                <section className="content">
                    <h1>Contáctanos</h1>
                    <p>
                        Completa el formulario y descubre cómo nuestras soluciones personalizadas pueden transformar tu presencia online.
                    </p>
                    <p>
                        ¿Por qué elegirnos? Experiencia y Conocimiento: Nuestro equipo está formado por profesionales con amplia experiencia en marketing digital.
                    </p>
                    <p>
                        Rellena el formulario y uno de nuestros especialistas se pondrá en contacto contigo para una consulta gratuita.
                        ¡No esperes más para ver los resultados que deseas!
                    </p>
                </section>

                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />

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

            {alert.show && <CustomAlert message={alert.message} type={alert.type} onClose={() => setAlert({ show: false })} />}
        </>
    );
};
