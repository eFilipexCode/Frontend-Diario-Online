import React, { useEffect, useState } from 'react';
import './PublicPosts.css';
import Header from '../Header/Header.jsx';
import api from '../../services/api.js';
import images from '../../utils/profileImages.js';

function PublicPosts() {
    document.title = 'Diário Online';
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasUnloadPosts, setHasUnloadPosts] = useState(true);

    async function getPublicPosts() {
        if (!hasUnloadPosts) {
            return;
        }
        setPage(page + 1);
        try {
            const response = await api.get(`http://localhost:3333/post/public?page=${page}`);
            setPosts([...posts, ...response.data]);
            if (response.data.length < 10 || response.data.length === 0)
                setHasUnloadPosts(false);
                console.log(response.data);
        } catch (err) {
            alert('Ocorreu um erro. Tente novamente.');
        }
    };

    useEffect(() => {
        getPublicPosts();
    }, []);

    return (
        <div className="public-post-container">
            <Header />
            <div className="public-posts">
                {posts.map(post => (
                    <div className="public-post" key={post.id}>
                        <div className="author-data-container">
                            <img 
                                src={post.profile_image_index ? images[`image${post.profile_image_index}`] : images.image0} 
                                alt="Diario Online "/>
                            <p>{post.username} / {post.name}</p>
                        </div>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            <button className={`load-more has-more-posts-${hasUnloadPosts}`} onClick={getPublicPosts}>
                {
                    hasUnloadPosts ? 'Carregar Mais' : 'Todos os posts carregados'
                }
            </button>
        </div>
    );
};

export default PublicPosts