import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/blog.css";
import useNavbarScroll from "../../js/component/useNavbarScroll";

export const Blog = ({ onScroll }) => {
    const blogRef = useRef(null);
    useNavbarScroll(onScroll, blogRef);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/posts.json");
                const data = await response.json();
                console.log("📝 Artículos cargados:", data);
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando los artículos:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="main-container-blog" ref={blogRef}>
            <Helmet>
                <title>Blog de Marketing y Comunicación | The Roas Factory</title>
                <meta name="description" content="Lee artículos sobre marketing digital, branding, publicidad y estrategias innovadoras. Mantente al día con las últimas tendencias." />
            </Helmet>

            <section className="content">
                <h1>Blog de Marketing y Comunicación</h1>
                <p>Explora las últimas tendencias en marketing, branding y publicidad.</p>
            </section>

            <div className="blog-container">
    {loading ? (
        <p className="loading">Cargando artículos...</p>
    ) : (
        posts.map((post) => (
            <div className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="content-container">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
            </div>
            <div className="button-container">
                <Link to={`/blog/${post.slug}`} className="read-more">
                    Leer más
                </Link>
            </div>
        </div>
        
        ))
    )}
</div>

        </div>
    );
};
