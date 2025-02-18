import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { IconsFloating } from "../../js/component/iconsFloating";
import "../../styles/contactanos.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";
import { sendEmail } from "../../js/services/emailService"; // Servicio de envío de email
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

    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

    // Validación en tiempo real por campo
    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "nombre":
                if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,50}$/.test(value)) {
                    error = "Introduce un nombre válido (solo letras y espacios).";
                }
                break;
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Introduce un email válido.";
                }
                break;
            case "telefono":
                if (!/^\d{9,15}$/.test(value)) {
                    error = "Introduce un teléfono válido (solo números, entre 9 y 15 dígitos).";
                }
                break;
            case "asunto":
                if (value.length < 3) {
                    error = "El asunto debe tener al menos 3 caracteres.";
                }
                break;
            case "mensaje":
                if (/(https?:\/\/[^\s]+)/g.test(value)) {
                    error = "No se permiten enlaces en el mensaje.";
                }
                break;
            default:
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    // Manejo de cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones finales antes de enviar
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "Este campo es obligatorio.";
            }
        });

        setErrors(newErrors);

        // Si hay errores, detener el envío
        if (Object.values(newErrors).some((error) => error)) {
            setAlert({ show: true, message: "Corrige los errores antes de enviar.", type: "error" });
            return;
        }

        const response = await sendEmail(formData);

        if (response.success) {
            setAlert({ show: true, message: "Mensaje enviado con éxito.", type: "success" });
            setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
        } else {
            setAlert({ show: true, message: response.message, type: "error" });
        }
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
                    <p>Completa el formulario y descubre cómo nuestras soluciones personalizadas pueden transformar tu presencia online.</p>
                    <p>¿Por qué elegirnos? Experiencia y Conocimiento: Nuestro equipo está formado por profesionales con amplia experiencia en marketing digital.</p>
                    <p>Rellena el formulario y uno de nuestros especialistas se pondrá en contacto contigo para una consulta gratuita. ¡No esperes más para ver los resultados que deseas!</p>
                </section>


                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} onBlur={handleChange} required />
                        {errors.nombre && <p className="error-message">{errors.nombre}</p>}

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleChange} required />
                        {errors.email && <p className="error-message">{errors.email}</p>}

                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} onBlur={handleChange} required />
                        {errors.telefono && <p className="error-message">{errors.telefono}</p>}

                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} onBlur={handleChange} required />
                        {errors.asunto && <p className="error-message">{errors.asunto}</p>}

                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={handleChange} onBlur={handleChange} required></textarea>
                        {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}

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
