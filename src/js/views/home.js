import React, { useRef } from "react";
import { Helmet } from "react-helmet";
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
        <div className="app-container home">
<div className="carousel">
                <div className="carousel-track">
                    {Array(10).fill(imageUrl).map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            loading="lazy"
                            alt="Publicidad y marketing digital en Madrid"
                        />
                    ))}
                </div>
            </div>

        <div className="main-container" ref={homeRef}>
            <Helmet>
                <title>Agencia de Publicidad y Marketing Digital en Madrid | The Roas Factory</title>
                <meta name="description" content="Expertos en publicidad, marketing digital, SEO y estrategias online en Madrid y toda España. Descubre cómo potenciar tu negocio con nosotros." />
                <meta name="keywords" content="agencia de publicidad en Madrid, marketing digital, SEO, diseño web, branding, redes sociales, email marketing, estrategias digitales, posicionamiento web, consultoría SEO, optimización digital, campañas publicitarias, publicidad online" />
                <meta name="author" content="The Roas Factory" />
                <meta property="og:title" content="The Roas Factory - Marketing Digital y Publicidad en Madrid" />
                <meta property="og:description" content="Especialistas en publicidad, marketing digital, SEO y estrategias online. Potenciamos marcas con innovación y creatividad." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tu-sitio.com" />
                <meta property="og:image" content="https://tu-sitio.com/logo.png" />
            </Helmet>

            <section className="content">
                <h1>La Era de la Realización Digital ha Llegado</h1>
                <p>
                    Ve más allá de la transformación digital hacia la realización digital con tecnología impulsada por IA,
                    análisis de datos inteligentes y soluciones de marketing creativo. Genera un impacto medible y mejora la
                    experiencia de tus clientes.
                </p>
            </section>

            

            <section className="card-container">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={cardImages[index] || ""} alt={card.title} loading="lazy" />
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
                <p>Diseñamos experiencias omnicanal impactantes, optimizamos plataformas tecnológicas y creamos estrategias innovadoras.</p>
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
        </div>

    );
};
