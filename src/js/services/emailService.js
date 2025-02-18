import emailjs from "emailjs-com";

const SERVICE_ID = "service_2rlnw2n";
const TEMPLATE_ID = "template_q589ayq";
const PUBLIC_KEY = "HxsrmZcKRK5mPtoVp";

// Lista de correos temporales a bloquear
const tempEmailDomains = [
    "tempmail.com", "10minutemail.com", "disposablemail.com", "fakeinbox.com",
    "mailinator.com", "guerrillamail.com", "yopmail.com"
];

// Expresiones regulares para validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{9,15}$/;
const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,50}$/;
const subjectRegex = /^[\w\sáéíóúÁÉÍÓÚñÑ.,!?()-]{3,100}$/;
const urlRegex = /(https?:\/\/[^\s]+)/g;

// Palabras clave de SPAM
const spamWords = ["dinero rápido", "hazte rico", "click aquí", "suscripción gratuita"];

/**
 * Verifica si un email es de un dominio temporal
 * @param {string} email - Email a revisar
 * @returns {boolean} - True si es temporal, False si no
 */
function isTempEmail(email) {
    const domain = email.split("@")[1];
    return tempEmailDomains.includes(domain);
}

/**
 * Evalúa si un mensaje es sospechoso (muy corto, todo en mayúsculas, etc.)
 * @param {string} mensaje - Texto del mensaje
 * @returns {boolean} - True si es sospechoso, False si es válido
 */
function isSuspiciousMessage(mensaje) {
    if (urlRegex.test(mensaje)) return true;
    if (mensaje === mensaje.toUpperCase() && mensaje.length > 20) return true;
    if (spamWords.some(word => mensaje.toLowerCase().includes(word))) return true;
    return false;
}

/**
 * Protege contra envíos repetidos (throttling)
 * @param {string} mensaje - Último mensaje enviado
 * @returns {boolean} - True si se bloquea el envío, False si se permite
 */
function isSpammySubmission(mensaje) {
    if (window.lastMessageSent === mensaje && window.lastMessageTime && (Date.now() - window.lastMessageTime < 60000)) {
        return true;
    }
    return false;
}

/**
 * Envía un email validando la estructura del formulario y bloqueando spam
 * @param {Object} formData - Datos del formulario
 * @returns {Object} { success: boolean, message: string }
 */
export async function sendEmail(formData) {
    if (!formData || !formData.nombre || !formData.email || !formData.telefono || !formData.asunto || !formData.mensaje) {
        return { success: false, message: "Todos los campos son obligatorios." };
    }
    if (!nameRegex.test(formData.nombre)) {
        return { success: false, message: "Introduce un nombre válido (solo letras y espacios)." };
    }
    if (!emailRegex.test(formData.email)) {
        return { success: false, message: "Introduce un email válido." };
    }
    if (isTempEmail(formData.email)) {
        return { success: false, message: "No se permiten correos temporales." };
    }
    if (!phoneRegex.test(formData.telefono)) {
        return { success: false, message: "Introduce un teléfono válido (solo números, entre 9 y 15 dígitos)." };
    }
    if (!subjectRegex.test(formData.asunto)) {
        return { success: false, message: "Introduce un asunto válido (mínimo 3 caracteres)." };
    }
    if (isSuspiciousMessage(formData.mensaje)) {
        return { success: false, message: "El mensaje parece sospechoso" };
    }
    if (isSpammySubmission(formData.mensaje)) {
        return { success: false, message: "Espera antes de enviar otro mensaje." };
    }

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: formData.nombre, 
            reply_to: formData.email,
            telefono: formData.telefono,  
            subject: formData.asunto,     
            message: formData.mensaje,    
        }, PUBLIC_KEY);

        window.lastMessageSent = formData.mensaje;
        window.lastMessageTime = Date.now();

        return { success: true, message: "Mensaje enviado con éxito." };
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return { success: false, message: "Error al enviar el mensaje. Intenta nuevamente más tarde." };
    }
}
