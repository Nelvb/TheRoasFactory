import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/privacidad.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const Privacidad = ({ onScroll }) => {
    const privacidadRef = useRef(null);
    useNavbarScroll(onScroll, privacidadRef);

    const navigate = useNavigate();

    return (
        <div className="main-container privacidad" ref={privacidadRef}>
            <Helmet>
                <title>Política de Privacidad | The Roas Factory</title>
                <meta name="description" content="Consulta nuestra Política de Privacidad para conocer cómo protegemos tus datos en The Roas Factory." />
            </Helmet>

            <div className="content">
                <h1>Política de Privacidad</h1>

                <h2>1. Responsable del Tratamiento</h2>
                <p>El responsable del tratamiento de los datos personales recabados a través de este sitio web es <strong>The Roas Factory</strong>, con correo de contacto: <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a>.</p>

                <h2>2. Finalidad del Tratamiento</h2>
                <p>Los datos personales proporcionados por los usuarios serán tratados con la única finalidad de atender solicitudes de información y consultas realizadas a través del formulario de contacto, correo electrónico o WhatsApp.</p>
                <p>No se almacenan los datos en bases de datos, ni se utilizan con fines comerciales o publicitarios. Tampoco se ceden a terceros salvo que sea estrictamente necesario para la prestación del servicio solicitado.</p>

                <h2>3. Legitimación para el Tratamiento</h2>
                <p>La base legal para el tratamiento de los datos es el consentimiento expreso del usuario al contactar con <strong>The Roas Factory</strong>. Al proporcionar voluntariamente su información, el usuario autoriza su uso exclusivo para la gestión de su solicitud.</p>
                <p>El usuario podrá retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado previamente.</p>

                <h2>4. Destinatarios de los Datos</h2>
                <p>Los datos no serán comunicados a terceros, salvo en los siguientes casos:</p>
                <ul>
                    <li>Cuando sea imprescindible para la gestión de la solicitud del usuario.</li>
                    <li>Si el usuario contrata un servicio que requiera la colaboración de partners de confianza. En este caso, se informará previamente al usuario.</li>
                    <li>Si existe una obligación legal que requiera su divulgación a autoridades competentes.</li>
                </ul>

                <h2>5. Derechos del Usuario</h2>
                <p>El usuario tiene derecho a:</p>
                <ul>
                    <li>Solicitar acceso a sus datos personales.</li>
                    <li>Rectificar los datos inexactos o incompletos.</li>
                    <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
                    <li>Limitar el tratamiento de sus datos en determinadas circunstancias.</li>
                    <li>Oponerse al tratamiento de sus datos en casos concretos.</li>
                </ul>
                <p>Para ejercer estos derechos, el usuario puede enviar una solicitud al correo <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a>, adjuntando una copia de su documento de identidad.</p>

                <h2>6. Conservación de los Datos</h2>
                <p>Los datos se conservarán únicamente durante el tiempo necesario para gestionar la consulta del usuario. Una vez resuelta la solicitud, serán eliminados de forma permanente.</p>

                <h2>7. Seguridad de los Datos</h2>
                <p>Se han adoptado medidas de seguridad adecuadas para proteger los datos personales y evitar accesos no autorizados, alteraciones o pérdidas.</p>
                <p>El tratamiento de los datos se realiza bajo protocolos de seguridad que garantizan su confidencialidad e integridad.</p>

                <h2>8. Modificación de la Política de Privacidad</h2>
                <p><strong>The Roas Factory</strong> se reserva el derecho de modificar esta Política de Privacidad para adaptarla a novedades legislativas o cambios en la actividad de la empresa.</p>
                <p>Cualquier modificación relevante será comunicada a los usuarios a través de este sitio web.</p>

                <h2>9. Contacto</h2>
                <p>Si el usuario tiene alguna duda sobre esta Política de Privacidad, puede ponerse en contacto con <strong>The Roas Factory</strong> a través del correo <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a>.</p>

                <button className="back-button-privacidad" onClick={() => navigate(-1)}>← Volver atrás</button>
            </div>

        </div>
    );
};
