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

  // **Transformar contenido HTML en JSX válido**
  const renderContentWithLinks = (content) => {
    return content.split(/(<a href="\/blog\/[a-zA-Z0-9-]+">[^<]+<\/a>)/g).map((part, index) => {
      const match = part.match(/<a href="(\/blog\/[a-zA-Z0-9-]+)">(.*?)<\/a>/);
      if (match) {
        return <Link key={index} to={match[1]}>{match[2]}</Link>;
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

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
        {post.image && <img src={post.image} alt={post.title} className="blog-image-full" />}
        <div className="blog-content">
          {renderContentWithLinks(post.content)}
        </div>
        <Link to="/blog" className="back-button">
          ← Volver al Blog
        </Link>
      </article>
    </div>
  );
};
