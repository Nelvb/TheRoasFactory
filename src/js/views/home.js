import React, { useRef } from "react";
import "../../styles/home.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

const imageUrl = "https://res.cloudinary.com/dgyz3ge7g/image/upload/f_webp/v1738192060/a75edptlm4rfflbso0b6.jpg";

const cardImages = [
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738241385/qjwbssddmm11s0hi0a5c.webp", // Innovación Tecnológica
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738241724/i6bqsf4qvyd5ozsiqifp.webp", // Creatividad Estratégica
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738241928/qoktivztgo6bhspx26gp.webp", // Estrategia Inteligente
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738242385/lnooub2lqcxkjiekmgk1.webp", // Crecimiento y Éxito
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738242764/o0elejil2any9komc6ho.webp", // Colaboración y Conexión
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738246441/bmekf4cvdbksf42fcrs4.webp", // Experiencia Digital 
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738246976/u9mxrirer7go0guhae3v.webp", // Transformación Digital 
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738247014/fdzfhhftxf9tk4a7mgwg.webp", // Marketing Omnicanal
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738247040/vrjexvnye8kzzqbvftwi.webp", // Confianza y Transparencia 
    "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738247066/e3gkza8kktuitgvt0oat.webp"  // Medición de Impacto 
];

const cardData = [
    { title: "Innovación Tecnológica", description: "Explora soluciones avanzadas con inteligencia artificial y herramientas disruptivas que redefinen el futuro digital." },
    { title: "Creatividad Estratégica", description: "Diseños impactantes y conceptos visuales que capturan la esencia de tu marca con un enfoque innovador." },
    { title: "Estrategia Inteligente", description: "Transforma ideas en planes de acción con análisis de datos y metodologías orientadas al crecimiento sostenible." },
    { title: "Crecimiento y Éxito", description: "Maximiza el potencial de tu negocio con estrategias que impulsan resultados escalables y sostenibles." },
    { title: "Colaboración y Conexión", description: "Fortalece relaciones con clientes y equipos a través de estrategias digitales centradas en la interacción humana." },
    { title: "Experiencia Digital", description: "Optimiza cada punto de contacto con soluciones que priorizan la satisfacción y fidelización del usuario." },
    { title: "Transformación Digital", description: "Integra tecnologías emergentes para modernizar procesos y acelerar la evolución de tu empresa en el entorno digital." },
    { title: "Marketing Omnicanal", description: "Conecta con tu audiencia en múltiples plataformas para una experiencia fluida y unificada." },
    { title: "Confianza y Transparencia", description: "Genera credibilidad a través de procesos claros, comunicación efectiva y relaciones comerciales sólidas." },
    { title: "Medición de Impacto", description: "Analiza el rendimiento con métricas clave y dashboards inteligentes que impulsan la toma de decisiones." }
];

export const Home = ({ onScroll }) => {
    const homeRef = useRef(null);

    useNavbarScroll(onScroll, homeRef);

    return (
        <div className="main-container" ref={homeRef}>
            <section className="content">
                <h1>La Era de la Realización Digital ha Llegado</h1>
                <p>
                    Ve más allá de la transformación digital hacia la realización digital con tecnología impulsada por IA,
                    análisis de datos inteligentes y soluciones de marketing creativo. Genera un impacto medible y mejora la
                    experiencia de tus clientes.
                </p>
            </section>

           {/* Carrusel automático e infinito */}
           <div className="carousel">
                <div className="carousel-track">
                    {Array(10).fill(imageUrl).map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            srcSet={`${url} 1x, ${url.replace("f_webp", "q_auto:best")} 2x`}
                            alt={`Imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>


            {/* Sección de Cards Destacadas */}
            <section className="card-container">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={cardImages[index] || ""} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </section>

            {/* Contenido Principal */}
            <section className="about">
                <h2>Quiénes Somos</h2>
                <p>
                    Somos una consultora digital que te ayuda a innovar con intención, creando productos digitales,
                    experiencias y soluciones basadas en lo que realmente necesitan las personas. Desde clientes y usuarios
                    finales hasta empleados y organizaciones, generamos resultados tangibles con un enfoque que maximiza el
                    valor para todos.
                </p>
                <p>
                    Durante más de una década, las empresas han perseguido la transformación digital, pero ahora ha llegado el
                    momento de hacerla realidad. Es hora de alcanzar los resultados que originalmente imaginaste. Bienvenido a
                    la era de la realización digital.
                </p>
            </section>

            <section className="services">
    <h2>Servicios Digitales</h2>
    <p>
        Diseñamos experiencias omnicanal impactantes, optimizamos plataformas tecnológicas y creamos estrategias
        innovadoras para maximizar el crecimiento y el valor de tu negocio en un entorno digital en constante evolución.
    </p>
    <a href="/servicios" className="cta-button">Descubre más</a>
</section>


            <section className="approach">
                <h2>Nuestro Enfoque</h2>
                <ul>
                    <li><strong>Experiencias Excepcionales:</strong> Diseña interacciones fluidas y efectivas para conectar con tu audiencia.</li>
                    <li><strong>Innovación con Propósito:</strong> Implementa tecnología de vanguardia sin perder de vista lo que ya funciona en tu negocio.</li>
                    <li><strong>Generación de Valor:</strong> Impulsa el crecimiento de manera sostenible para tu ecosistema digital.</li>
                </ul>
            </section>
        </div>
    );
};
