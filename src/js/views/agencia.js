import React, { useRef, useState } from "react";
import "../../styles/agencia.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";


const valores = [
    {
        title: "Construye hacia lo que continua.",
        image: "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738269801/dsjnxdia8qabfu9wugv8.webp",
        heading: "Progreso",
        description: "Mantenerse a la vanguardia no significa necesariamente ir por delante de todo. Darse cuenta de lo que continua para tu negocio depende de comprenderlo mejor. Por eso creemos que un gran diseño y una gran ingeniería van de la mano para crear progreso.\n\nDespués de todo, las inversiones que realizas deben enfocarse en impulsarte hacia adelante, no en frenarte. Nuestra misión es invertir tu tiempo y recursos sabiamente, de una manera que resuelva desafíos reales. Porque para alcanzar lo que continua, tienes que construir el puente que te llevará allí."
    },
    {
        title: "Se acabaron los días de la innovación por el simple hecho de innovar.",
        image: "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738269836/hfmhymw8vgbulysvogdg.webp",
        heading: "Intención",
        description: "Aquí, la reflexión lo es todo. Estamos elevando el nivel de las soluciones digitales que generan un impacto positivo en tu negocio. Logramos esto pensando antes de hacer, planificando antes de actuar y comprendiendo antes de recomendar.\n\nNo buscamos el poder ni la gloria. La tecnología es un habilitador y un medio poderoso para alcanzar lo que quieres lograr. Por eso es tan importante para nosotros entender el \"por qué\" detrás de todo lo que hacemos. Es una forma completamente nueva de innovar: es la innovación 2.0."
    },
    {
        title: "El verdadero valor es ofrecerlo a todos.",
        image: "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738269993/eybiigx4hbubxmqoypng.webp",
        heading: "Conexión",
        description: "Nuestro éxito se mide por una sola cosa: tu éxito. La realización digital significa que nos tomamos el tiempo para comprender tu negocio, tus desafíos, tus objetivos y tus necesidades. Todo esto para que podamos crear más valor para todo tu ecosistema.\n\nEste enfoque genera conexiones mucho más profundas entre nuestro equipo y el tuyo, y entre tu negocio y tus clientes. Está al servicio de ayudar a que tu negocio tenga aún más significado para todas las personas con las que interactúbas hoy y en el futuro."
    },
    {
        title: "Los usuarios son lo primero.",
        image: "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738270024/kfhkswgr2exk9eaqsnvl.webp",
        heading: "Personas",
        description: "Creemos que la promesa de la tecnología es mejorar la vida. Somos socios, no vendedores, y nos encanta trabajar con organizaciones que buscan crear cosas de alto valor. Eso significa reducir los riesgos a corto plazo y enfocarnos en los beneficios a largo plazo para cada cliente, inversionista y empleado.\n\nEs momento de una consultora que vuelva a poner a las personas en el centro de las inversiones tecnológicas. Como expertos y líderes de opinión, tenemos la responsabilidad de asegurarnos de que lo que creamos realmente beneficie a la sociedad."
    }
];


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
           <section className="content">
    <h1>Impulsamos tu crecimiento, juntos</h1>
    <p>
    Creemos en el poder de las personas y en las relaciones que construimos. La tecnología y la creatividad son herramientas poderosas, pero son las personas las que marcan la diferencia. Juntos, construiremos un futuro digital que no solo impulse su marca, sino que también genere un impacto real y duradero en su sector.
    </p>
</section>

            <section className="values-section container">
                <h2 className="text-center">Nuestros valores</h2>
                <div className="values-slider d-flex flex-wrap justify-content-center">
                    <div className="value-content row w-100">
                        <div className="value-left col-md-6 d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: `url(${valores[currentIndex].image})` }}>
                            <h3>{valores[currentIndex].title}</h3>
                        </div>
                        <div className="value-right col-md-6 d-flex flex-column justify-content-center">
                            <h3>{valores[currentIndex].heading}</h3>
                            <p>{valores[currentIndex].description}</p>
                        </div>
                    </div>
                </div>

                <div className="slider-controls">
                    <button className="prev" onClick={prevSlide}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="slider-dots">
                        {valores.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next" onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </section>


            {/* Sección Nuestro Enfoque */}
            <section className="approach">
                <h2>Nuestro Enfoque</h2>
                <p>
                Nos tomamos el tiempo de comprender a fondo tus necesidades y las de tu audiencia. 
        Cada estrategia está diseñada para aportar valor real y conectar con las personas 
        adecuadas en el momento preciso. Más que soluciones digitales, creamos experiencias 
        que impulsan resultados sostenibles.               
         </p>
            </section>

            {/* Sección de Partners */}
            <section className="partners">
            <h2>Alianzas que transforman</h2>
    <p>
        Creemos en el poder de las alianzas estratégicas. Al conectar diferentes capacidades y fomentar 
        la colaboración, construimos redes que impulsan la innovación y el crecimiento. Nos enorgullece 
        trabajar con partners que amplifican nuestro impacto, compartiendo la visión de un futuro digital 
        más sólido y conectado.
    </p>
            </section>

            {/* Sección de Equipo */}
            <section className="team">
            <h2>Conoce a nuestro equipo</h2>
    <p>
        Nuestro equipo combina experiencia en estrategia, marketing y tecnología para crear 
        soluciones digitales que priorizan a las personas y generan impacto real. Trabajamos 
        con una mentalidad innovadora y un enfoque centrado en los detalles para diseñar 
        experiencias que marcan la diferencia.
    </p>
            </section>

 {/* CTA */}
<section className="cta">
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
