import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "../../styles/servicios.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

const servicios = [
  {
    title: "Marketing Digital",
    images: [
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738679568/dnvgibgdovtovqlhesqv.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738679773/slnyajxokqjg4kdnmzno.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738679728/e5azfhvd7vtxx7zfbdru.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738679742/ew7298v7sxvenee4odk4.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738704483/qaoxiq8f1ey13numqomn.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738693657/vvetcfamoub3yl3ijkcl.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738703942/dg9ftb3tmrwk66nhbjay.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738703690/d9yjhhvnttmmunvrdlpj.webp',
    ],
    description: "Estrategias innovadoras para captar clientes y aumentar tu visibilidad online con campañas efectivas.",
    points: [
      "Estrategia digital integrada",
      "SEO técnico y semántico",
      "Marketing de contenidos transmedia",
      "Social media marketing y community management",
      "Publicidad programática y de rendimiento",
      "Marketing de influencers y UGC",
      "Email marketing automatizado",
      "Analítica avanzada y business intelligence",
      "Comercio electrónico omnicanal",
      "Marketing conversacional (chatbots, IA)",
    ],
  },
  {
    title: "Publicidad",
    images: [
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738692694/n1mikcfds1rvgwcunxi4.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738692819/tscw9liurjojmk7taqwv.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738692925/qdq3dgwxmgxuftkhxgsx.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738692998/fpihyaghiuevkaxdf43u.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738693091/m8xsqfsp3kvpptykm3eg.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738693201/nittwkrp0bqwu1gcipmj.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738693297/lenibfupixaqxci4krqb.webp",
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738704940/imnqxwiv3mtltnhpvrab.webp',
    ],
    description: "Creamos campañas publicitarias impactantes que generan reconocimiento y conversión.",
    points: [
      "Campañas publicitarias omnicanal",
      "Conceptualización creativa",
      "Diseño gráfico adaptativo",
      "Producción audiovisual multiplataforma",
      "Contenido interactivo y experiencial",
    ],
  },
  {
    title: "Estrategia y Marca",
    images: [
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738695719/ruhhem6ybohzh9q6wsbd.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738694130/b0w4hmskx0cnidz88wlr.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738695460/xbyx18a5pntrnz0rrthc.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738706451/e7mo2hcrv1jqdfrbokza.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738698464/v1dhqrvxv3n8atgor7ce.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738705775/phelmapnzzisco519fe7.webp",
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738705235/rmxqhcxxh7gvdevwfgrw.webp',
      'https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738705954/wlohfvzrqqht7gx1tqcn.webp',
    ],
    description: "Posicionamos tu marca con una identidad fuerte y estrategias de mercado efectivas.",
    points: [
      "Desarrollo de estrategias y planes de marketing",
      "Branding y gestión de marca",
      "Diseño de identidad corporativa",
      "Investigación de mercado y análisis de competencia",
      "Relaciones públicas multiplataforma",
      "Eventos experienciales e inmersivos",
    ],
  },
  {
    title: "Desarrollo Web & Ecommerce",
    images: [
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708088/db8ctcc05k3ubhwfgbgm.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708181/fh5axbimll0lqyctksn4.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708245/trvcixni47rvnm7bowrz.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708320/fnfrfwo3zgvaerzeztxx.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708352/msvp18hqlyxkto0yetkn.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708455/c0q41zaomdvw8ioknhri.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708495/es5oviwoh8xrwx37ytxx.webp",
      "https://res.cloudinary.com/dgyz3ge7g/image/upload/v1738708523/oc2qpx3mqvwr3k1llpcz.webp",


    ],
    description: "Creamos sitios web y tiendas online optimizadas para experiencia de usuario y ventas.",
    points: [
      "Páginas web personalizadas (WordPress, Prestashop, Shopify)",
      "Tiendas online optimizadas para conversión",
      "Desarrollo web a medida con escalabilidad",
      "UX/UI atractivo y responsive",
      "Integraciones avanzadas (pasarelas de pago, ERP, CRM)",
    ],
  },
];

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="slider-controls">
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};



export const Servicios = ({ onScroll }) => {
  const serviciosRef = useRef(null);
  useNavbarScroll(onScroll, serviciosRef);

  return (
    <div className="main-container" ref={serviciosRef}>
      <Helmet>
        <title>Servicios de Marketing Digital | The Roas Factory</title>
        <meta name="description" content="Servicios de marketing digital, publicidad y desarrollo web para marcas que buscan destacar. Aumenta tu visibilidad, conversión y engagement con estrategias personalizadas." />
        <meta name="keywords" content="marketing digital, publicidad online, estrategia digital, branding, ecommerce, desarrollo web, SEO, publicidad programática, diseño web" />
        <meta property="og:title" content="Servicios de Marketing Digital | The Roas Factory" />
        <meta property="og:description" content="Descubre nuestros servicios de marketing digital, publicidad y desarrollo web. Estrategias digitales efectivas para hacer crecer tu marca." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-sitio.com/servicios" />
        <meta property="og:image" content="https://tu-sitio.com/logo.png" />

        {/* 🔹 Structured Data SEO - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing Digital",
            "description": "Estrategias innovadoras para captar clientes y aumentar tu visibilidad online con campañas efectivas.",
            "provider": {
              "@type": "Organization",
              "name": "The Roas Factory"
            },
            "areaServed": "España",
            "serviceType": "Marketing Digital"
          })}
        </script>
      </Helmet>

      <section className="content">
        <h1>¿Nuestra pasión? Soluciones que dejan huella.</h1>
        <p>
          Y las construiremos juntos. Como tu socio en la realización digital, estamos aquí para ayudarte a crear los productos digitales, la tecnología, los datos y las soluciones de marketing que necesitas para ofrecer experiencias asombrosas y resultados que puedas medir.
        </p>
      </section>

      <div className="max-w-6xl mx-auto p-8 space-y-16 bg-gray-50">
        {servicios.map((servicio, index) => (
          <section key={index} className="section-container">
            <h2>{servicio.title}</h2>
            <p><strong>{servicio.description}</strong></p>
            <Carousel images={servicio.images} />
            
            <ul className="row row-cols-1 row-cols-md-2 g-3 px-3">
              {servicio.points.map((point, idx) => (
                <li key={`${servicio.title}-${idx}`} className="d-flex align-items-start">
                  <span className="text-start">{point}</span>
                </li>
              ))}
            </ul>

          </section>
        ))}
      </div>

      <section className="section-container">
        <h2>¿Listos para transformar tu marca?</h2>
        <p>
          En The Roas Factory, no solo creamos estrategias, construimos conexiones que impulsan resultados.
          Cuéntanos tus desafíos y juntos encontraremos la mejor manera de alcanzar tus metas.
        </p>
        <a href="/contactanos" className="cta-button">Empieza ahora</a>
      </section>
    </div>
  );
};
