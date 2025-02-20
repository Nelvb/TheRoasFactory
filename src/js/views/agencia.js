import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/agencia.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";
import { ValueSlider } from "../component/valueSlider";
import { valores } from "../component/valueSlider";


export const Agencia = ({ onScroll }) => {
    const agenciaRef = useRef(null);
    useNavbarScroll(onScroll, agenciaRef);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % valores.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + valores.length) % valores.length);
    };

    return (
        <div className="main-container" ref={agenciaRef}>
            <Helmet>
                <title>{`${valores[currentIndex].title} | The ROAS Factory`}</title>
                <meta name="description" content={valores[currentIndex].description} />
                <meta name="keywords" content="estrategia de marca, branding, marketing digital, diseño corporativo, relaciones públicas, investigación de mercado, eventos" />
                <meta property="og:title" content={`${valores[currentIndex].title} | The ROAS Factory`} />
                <meta property="og:description" content={valores[currentIndex].description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tu-sitio.com/agencia" />
                <meta property="og:image" content={valores[currentIndex].image} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "The Roas Factory",
                        "url": "https://tu-sitio.com/agencia",
                        "logo": "https://tu-sitio.com/logo.png",
                        "description": "Agencia especializada en estrategia de marca, branding y marketing digital."
                    })}
                </script>
            </Helmet>


            <section className="content">
                <h1>Impulsamos tu crecimiento, juntos</h1>
                <p>
                    No se trata solo de hacer marketing, sino de diseñar estrategias que posicionen tu marca como un referente en su sector.
                    En The ROAS Factory, aplicamos un enfoque basado en datos y optimización constante para lograr campañas publicitarias que generan impacto y crecimiento real.
                </p>
            </section>

            <section className="about-us">
                <h2>The ROAS Factory: Marketing that Matters</h2>

                <p>
                    En The ROAS Factory, no solo hacemos marketing, creamos estrategias que generan impacto real.
                    Nos especializamos en maximizar el <a href="/blog/roas-publicidad-digital" className="internal-link">
                        ROAS (Return on Ad Spend)</a> de cada campaña, asegurando que cada dólar invertido en publicidad
                    se traduzca en crecimiento y rentabilidad.
                </p>

                <p>
                    Desde campañas altamente optimizadas en Google Ads, Facebook Ads, TikTok Ads e Instagram Ads,
                    hasta estrategias avanzadas de SEO, email marketing y automatización, nuestro enfoque se basa
                    en datos, creatividad y una ejecución impecable.
                </p>

                <p>
                    En The ROAS Factory, no seguimos tendencias, creamos estrategias que marcan la diferencia.
                    Cada campaña es diseñada con precisión, asegurando que cada acción tenga un propósito claro:
                    maximizar el retorno de inversión y generar crecimiento sostenible.
                </p>

                <p>
                    Si buscas un equipo que entienda la importancia del retorno de inversión y que impulse tu marca
                    hacia el siguiente nivel, bienvenido a The ROAS Factory.
                </p>

                <p><strong>Tu inversión, nuestro compromiso. Tus resultados, nuestra prioridad.</strong></p>
            </section>


            <ValueSlider
                valores={valores}
                currentIndex={currentIndex}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                setCurrentIndex={setCurrentIndex}
            />

<section className="section-container">
                <h2>Nuestro Enfoque</h2>
                <p>
                    Nos tomamos el tiempo de comprender a fondo tus necesidades y las de tu audiencia.
                    Cada estrategia está diseñada para generar valor a largo plazo mediante datos, optimización constante y enfoques personalizados. Más que soluciones digitales, construimos estrategias que evolucionan con el mercado.
                </p>

            </section>

            <section className="section-container">
                <h2>Alianzas que transforman</h2>
                <p>
                    Creemos en el poder de las alianzas estratégicas. Al conectar diferentes capacidades y fomentar
                    la colaboración, construimos redes que impulsan la innovación y el crecimiento. Nos enorgullece
                    trabajar con partners que amplifican nuestro impacto, compartiendo la visión de un futuro digital
                    más sólido y conectado.
                </p>
            </section>

            <section className="section-container">
                <h2>Conoce a nuestro equipo</h2>
                <p>
                    Nuestro equipo combina experiencia en estrategia, marketing y tecnología para crear
                    soluciones digitales que priorizan a las personas y generan impacto real. Trabajamos
                    con una mentalidad innovadora y un enfoque centrado en los detalles para diseñar
                    experiencias que marcan la diferencia.
                </p>
            </section>

            <section className="section-container">
                <h2>¿Listo para dar el siguiente paso?</h2>
                <p>
                    Nos encantaría conocer tu proyecto y explorar juntos cómo llevarlo al siguiente nivel.
                    Si tienes una idea en mente o simplemente quieres charlar sobre nuevas oportunidades,
                    estamos aquí para escucharte.
                </p>
                <a href="/contactanos" className="cta-button">Hablemos</a>
            </section>
        </div>
    );
};
