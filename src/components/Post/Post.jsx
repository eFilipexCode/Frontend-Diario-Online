import React, { useState, useEffect } from 'react';
import './Post.css';
import Header from '../Header/Header.jsx';
import api from '../../services/api.js';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom'

function Post(props) {
    const [post, setPost] = useState({});
    document.title = 'Diario Online - ' + post.title;

    const history = useHistory();

    useEffect(() => {
        getPost();
    }, []);

    async function getPost() {
        const response = await api.get(`post/${props.location.state.a}`);
        setPost(response.data);
    };

    let warningOpen = false;
    function openDeleteWarning() {
        const warning = document.querySelector('.delete-confirmation');
        warningOpen ? warning.style.display = 'none' : warning.style.display = 'flex';
        warningOpen = !warningOpen;
    };

    async function deletePost() {
        try {
           api.delete(`post/${post.id}`, {
               headers: {
                   authorization: localStorage.getItem('diario-online-user-id')
               }
           });
           history.push('/diario');
        } catch (err) {
            alert('Algo parece ter dado errado. Tente novamente.');
        };
    };

    return (
        <div className="post-container">
            <div className="delete-confirmation">
                <div className="warning">
                    <span>Você tem certeza que quer deletar este post? Ele desaparecerá para sempre!</span>
                    <div className="options-delete">
                        <button onClick={deletePost} className="delete">Deletar</button>
                        <button onClick={openDeleteWarning} className="cancel-delete">Cancelar</button>
                    </div>
                </div>
            </div>
            <Header />
            <div className="post-unique">
                <div className="options-icons">
                    <FiTrash size={20} className="delete-btn" onClick={() => openDeleteWarning()}/>
                    <FiEdit3 size={20} className="edit-btn" onClick={() => history.push('/edit', { post: post })} />
                </div>
                <h1>{post.title}</h1>
                <p className="desc">{post.description}</p>
                <p className="content">{post.content}</p>
            </div>
        </div>
    );
};

export default Post;