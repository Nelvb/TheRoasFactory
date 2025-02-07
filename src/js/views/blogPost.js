import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/blog.css";

export const BlogPost = () => {
    const { slug } = useParams(); // 🏷️ Obtiene el slug desde la URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("/posts.json"); // 📂 LEE EL JSON
                const data = await response.json();
                const foundPost = data.find((p) => p.slug === slug);
                setPost(foundPost);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando el artículo:", error);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) return <p className="loading">Cargando artículo...</p>;
    if (!post) return <p className="error">Artículo no encontrado.</p>;

    return (
        <div className="main-container">
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
                <Link to="/blog" className="back-link">← Volver al Blog</Link>
            </article>
        </div>
    );
};
