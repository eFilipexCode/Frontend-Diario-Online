import React, { useState } from 'react';
import './NewPost.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import api from '../../services/api.js';
import Header from '../Header/Header.jsx';
import { useHistory } from 'react-router-dom';

function NewPost() {
    const userId = localStorage.getItem('diario-online-user-id');
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");
    const [pub, setPub] = useState(false);

    async function post(e) {
        e.preventDefault();

        const data = {
            title,
            content,
            public: pub,
            description: desc
        }

        await api.post('post', data, {
            headers: {
                Authorization: userId
            }
        });

        history.push('/diario');
    };

    let menuOpened = false;
    function showAndHideMenu() {
        const menuOptions = document.querySelector('.post-options');
        const nextButton = document.querySelector('.next');
        menuOptions.style.opacity = '1';
        menuOptions.style.pointerEvents = 'all';
        nextButton.style.display = 'none'
        menuOpened = !menuOpened;
    };

    function hideMenuOrBack() {
        const nextButton = document.querySelector('.next');
        const menuOptions = document.querySelector('.post-options');
        if (menuOpened) {
            nextButton.style.display = 'flex';
            menuOptions.style.opacity = '0';
            menuOptions.style.pointerEvents = 'none';
            menuOpened = !menuOpened;
        } else if (!menuOpened) {
            history.push('/diario')
        };
    };

    return (
        <div className='new-post-container'>
            <Header />
            <textarea
                onChange={e => setContent(e.target.value)}
                value={content}
                placeholder="Escreva o que deseja postar..."></textarea>
            <div className="buttons">
                    <button
                        onClick={() => hideMenuOrBack()}
                        className="back">
                        <FiArrowLeft />
                    </button>
                <button
                    onClick={() => showAndHideMenu()}
                    className="next">
                    <FiArrowRight />
                </button>
            </div>
            <div className="post-options">
                <form onSubmit={e => post(e)}>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Título" />
                    <textarea
                        onChange={e => setDesc(e.target.value)}
                        value={desc}
                        type="text"
                        className="description"
                        placeholder="Descrição (opcional)" />
                    <div className="public-option">
                        <span>Público:</span>
                        <input
                            onChange={e => setPub(e.target.checked)}
                            value={pub}
                            type="checkbox" />
                    </div>
                    <button type="submit">Postar</button>
                </form>
            </div>
        </div>
    );
};

export default NewPost;