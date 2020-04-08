import React from 'react';
import Header from '../../components/Header/Header.jsx';
import './EditPosts.css';
import { useState, useEffect } from 'react';
import api from '../../services/api.js';

function EditPosts(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('');
    const [pub, setPub] = useState(false);

    useEffect(() => {
        const post = props.location.state.post;
        setStates(post);
    }, []);

    function setStates(dados) {
        setTitle(dados.title);
        setDesc(dados.dec);
        setContent(dados.content);
        setPub(dados.public === 1 ? true : false);
    };

    async function editPost(e) {
        e.preventDefault()

        if (!title || !content)
            return alert('Preencha as informações corretamente.');

        const data = {
            update: {
                title,
                description: desc,
                content,
                public: pub
            },
            postId: props.location.state.post.id
        }

        try {
            const response = await api.put('edit', data, {
                headers: {
                    authorization: localStorage.getItem('diario-online-user-id')
                }
            });
            console.log(response.data);
        } catch (err) {
            alert('Ops! Algo parece ter dado errado. Tente novamente.');
        }
    };

    return (
        <div className="edit-container">
            <Header />
            <div className="inputs-edit">
                <form>
                    <input
                        placeholder="Título"
                        value={title}
                        className="edit-title"
                        onChange={e => setTitle(e.target.value)} />
                    <input
                        placeholder="Descrição (opcional)"
                        value={desc}
                        className="edit-desc"
                        onChange={e => setDesc(e.target.value)} />
                    <textarea
                        value={content}
                        className="edit-content"
                        onChange={e => setContent(e.target.value)} />
                    <div className="public-option">
                        <span>Público: </span>
                        <input
                            type="checkbox"
                            className="edit-public"
                            checked={pub}
                            onChange={e => setPub(e.target.checked)} />
                    </div>
                    <button className="send-update" onClick={e => editPost(e)}>Editar</button>
                </form>
            </div>
        </div>
    );
};

export default EditPosts;