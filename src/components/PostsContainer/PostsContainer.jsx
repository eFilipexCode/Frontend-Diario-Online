import React, { useState, useEffect } from 'react';
import './PostsContainer.css';
import api from '../../services/api.js';
import noPosts from '../../assets/no-posts.svg';

function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const userId = localStorage.getItem('diario-online-user-id');
    let totalPosts = localStorage.getItem('diario-online-user-total-posts');

    useEffect(() => {
        api.get('user/posts', {
            headers: {
                authorization: userId,
            }
        }).then(response => {
            setPosts(response.data);
            if (response.data.length === 0) {
                document.querySelector('.no-posts').style.display = 'flex';
            };
            return response;
        })
    }, [totalPosts, userId]);

    return (
        <div className="posts-container">
            <div className="no-posts">
                <img src={noPosts} alt="Diário Online" />
                <span>Nenhum post ainda.</span>
            </div>
            {posts.map(post => (
                <div key={post.id} className='post'>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsContainer;