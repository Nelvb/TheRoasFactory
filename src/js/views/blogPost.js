import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../../styles/blogPost.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const BlogPost = ({ onScroll }) => {
  const { slug } = useParams();
  const blogPostRef = useRef(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRefReady, setIsRefReady] = useState(false);

  // Cargar el post
  useEffect(() => {
    if (onScroll) {
      onScroll(true);
    } else {
      console.error("onScroll es undefined en BlogPost.");
    }

    const fetchPost = async () => {
      try {
        const jsonUrl = process.env.NODE_ENV === "production"
          ? "https://4geeksacademy.github.io/The_Roas_Factory/posts.json"
          : "/posts.json";

        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const foundPost = data.find((p) => p.slug === slug);
        setPost(foundPost);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando el artículo:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, onScroll]);

 // Manejar la carga de la imagen
const handleImageLoad = () => {
  setTimeout(() => {
      const imageElement = document.querySelector(".blog-image-full");
      if (imageElement) {
          imageElement.classList.add("fade-in");
      }
  }, 100);
};

// Aplicar la animación si la imagen ya estaba en caché
useEffect(() => {
  const imageElement = document.querySelector(".blog-image-full");
  if (imageElement && imageElement.complete) {
      handleImageLoad();
  }
}, [post]);


  // Manejar la carga del título
  useEffect(() => {
    const titleElement = document.querySelector("h1");
    if (titleElement) {
      setTimeout(() => {
        titleElement.classList.add("fade-in");
      }, 100);
    }
  }, [post]);

  // Manejar la carga del contenido
  useEffect(() => {
    const contentElement = document.querySelector(".blog-content");
    if (contentElement) {
      setTimeout(() => {
        contentElement.classList.add("fade-in");
      }, 300);
    }
  }, [post]);

  // Mantener lógica de onScroll con navbar
  useEffect(() => {
    const checkRefReady = setInterval(() => {
      if (blogPostRef.current) {
        setIsRefReady(true);
        clearInterval(checkRefReady);
      }
    }, 100);

    return () => clearInterval(checkRefReady);
  }, []);

  useNavbarScroll(onScroll, isRefReady ? blogPostRef : { current: null });

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading">Cargando artículo...</p>
      </div>
    );
  }

  if (!post) {
    return <p className="error">Artículo no encontrado.</p>;
  }

  return (
    <div className="main-container" ref={blogPostRef}>
      <Helmet>
        <title>{post.title} | The Roas Factory</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="blog-article">
        <h1>{post.title}</h1>
        <p className="post-info">
          {new Date(post.date).toLocaleDateString()} - {post.author}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="blog-image-full"
            onLoad={handleImageLoad}
          />
        )}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="back-button">
          ← Volver al Blog
        </Link>
      </article>
    </div>
  );
};
