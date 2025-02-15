import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/avisoLegal.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const AvisoLegal = ({ onScroll }) => {
    const avisoRef = useRef(null);
    useNavbarScroll(onScroll, avisoRef);

    const navigate = useNavigate();

    return (
        <div className="main-container aviso" ref={avisoRef}>
            <Helmet>
                <title>Aviso Legal | The Roas Factory</title>
                <meta name="description" content="Consulta nuestro Aviso Legal para conocer las condiciones de uso del sitio web de The Roas Factory." />
            </Helmet>

            <div className="content">
    <h1>Aviso Legal</h1>

    <h2>1. Información General</h2>
    <p>En cumplimiento con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web es propiedad de <strong>The Roas Factory</strong>.</p>
    <p><strong>Correo de contacto:</strong> <a href="mailto:theroasfactory@gmail.com">theroasfactory@gmail.com</a></p>

    <h2>2. Condiciones de Uso</h2>
    <p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de los términos del presente Aviso Legal. Si no está de acuerdo con estas condiciones, debe abstenerse de utilizar el sitio web.</p>
    <p>El usuario se compromete a hacer un uso adecuado del sitio web y a no emplearlo para actividades ilícitas, fraudulentas o que puedan afectar los derechos de <strong>The Roas Factory</strong> o de terceros.</p>
    <p>En particular, el usuario se abstendrá de:</p>
    <ul>
        <li>Publicar o difundir contenido ofensivo, discriminatorio o que infrinja derechos de terceros.</li>
        <li>Intentar acceder a secciones restringidas del sitio web sin autorización.</li>
        <li>Introducir virus informáticos, malware o cualquier elemento que pueda dañar el sitio web o afectar su funcionalidad.</li>
    </ul>

    <h2>3. Responsabilidad</h2>
    <p><strong>The Roas Factory</strong> no garantiza la disponibilidad ininterrumpida del sitio web ni la ausencia de errores en sus contenidos. No se hace responsable de daños derivados de:</p>
    <ul>
        <li>Fallas técnicas o interrupciones del servicio.</li>
        <li>Presencia de virus u otros elementos dañinos introducidos por terceros.</li>
        <li>Uso inadecuado de la información contenida en este sitio web.</li>
    </ul>

    <h2>4. Enlaces a Sitios de Terceros</h2>
    <p>El sitio web puede incluir enlaces a páginas de terceros. <strong>The Roas Factory</strong> no controla ni responde por el contenido, seguridad o veracidad de dichas páginas.</p>
    <p>El acceso a sitios externos a través de enlaces publicados en este sitio es responsabilidad exclusiva del usuario.</p>

    <h2>5. Propiedad Intelectual e Industrial</h2>
    <p>Todos los derechos de propiedad intelectual e industrial del sitio web, incluidos textos, imágenes, diseños y código fuente, pertenecen a <strong>The Roas Factory</strong> o se utilizan con autorización de sus titulares.</p>
    <p>Queda prohibida la reproducción, distribución, modificación o cualquier otro uso de los contenidos sin el consentimiento previo y expreso de <strong>The Roas Factory</strong>, salvo en los casos permitidos legalmente.</p>

    <h2>6. Protección de Datos Personales</h2>
    <p>Los datos personales recogidos a través de este sitio web serán tratados conforme a la normativa vigente en materia de protección de datos, incluyendo el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>
    <p>Para más información, consulte nuestra <a href="/privacidad">Política de Privacidad</a>.</p>

    <h2>7. Uso de Cookies</h2>
    <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Puede gestionar sus preferencias en nuestra <a href="/cookies">Política de Cookies</a>.</p>

    <h2>8. Modificaciones del Aviso Legal</h2>
    <p><strong>The Roas Factory</strong> se reserva el derecho de modificar el presente Aviso Legal para adaptarlo a cambios normativos o a la evolución de sus actividades.</p>
    <p>Se recomienda a los usuarios revisar periódicamente esta sección para estar informados de posibles actualizaciones.</p>

    <h2>9. Legislación y Jurisdicción Aplicable</h2>
    <p>El presente Aviso Legal se rige por la legislación española.</p>
    <p>Para la resolución de cualquier conflicto derivado del uso del sitio web, las partes se someten a los juzgados y tribunales de la localidad donde tenga su sede <strong>The Roas Factory</strong>, salvo que la normativa aplicable establezca otra jurisdicción.</p>

    <button className="back-button-aviso" onClick={() => navigate(-1)}>← Volver atrás</button>
</div>

        </div>
    );
};
