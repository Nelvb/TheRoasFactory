import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/blog.css";
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
    
        console.log("Fetching:", jsonUrl);
    
        const response = await fetch(jsonUrl);
        console.log("Response status:", response.status);
    
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
        const data = await response.json();
        console.log("JSON Data:", data);
    
        const foundPost = data.find((p) => p.slug === slug);
        console.log("Found Post:", foundPost);
    
        setPost(foundPost);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando el artículo:", error);
        setLoading(false);
      }
    };
    
    
    

    fetchPost();
  }, [slug, onScroll]);

  // **Esperar a que blogPostRef esté listo antes de usarlo**
  useEffect(() => {
    const checkRefReady = setInterval(() => {
      if (blogPostRef.current) {
        setIsRefReady(true);
        clearInterval(checkRefReady);
      }
    }, 100);

    return () => clearInterval(checkRefReady);
  }, []);

  // **Ejecutar useNavbarScroll sin romper las reglas de los hooks**
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
    <div
      className="main-container"
      ref={blogPostRef}
    >
      <Helmet>
        <title>{post.title} | The Roas Factory</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="blog-article">
        <h1>{post.title}</h1>
        <p className="post-info">
          {new Date(post.date).toLocaleDateString()} - {post.author}
        </p>
        {post.image && <img src={post.image} alt={post.title} className="blog-image-full" />}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="back-button">
          ← Volver al Blog
        </Link>
      </article>
    </div>
  );
};
