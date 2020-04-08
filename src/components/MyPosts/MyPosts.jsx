import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import './MyPosts.css';

function MyPosts() {
    const [post, setPost] = useState([]);
    const userId = localStorage.getItem('diario-online-user-id');

    const history = useHistory();

    async function getPosts() {
        const response = await api.get('/user/posts', {
            headers: {
                Authorization: userId
            }
        });
        setPost([...post, ...response.data]);
    };

    useEffect(() => {
        getPosts();
    }, []);


    function goToPost(id) {
        history.push('post', { a: id });
    };

    return (
        <div className="myposts-container">
            <Header />
            <div className="user-posts">
                {post.map(post => (
                    <div
                        className="user-post"
                        onClick={() => goToPost(post.id)}
                        key={post.id}>
                        
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPosts;