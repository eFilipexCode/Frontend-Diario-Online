import React, { useState, useEffect } from 'react';
import './Profile.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import images from '../../utils/profileImages.js';
import api from '../../services/api.js';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalPublicPosts, setTotalPublicPosts] = useState(0);
    const [totalPrivatePosts, setTotalPrivatePosts] = useState(0);
    const [profilePicIndex, setProfilePicIndex] = useState(0);

    document.title = name + ' - Diário Online';
    
    const userId = localStorage.getItem('diario-online-user-id');

    useEffect(() => {
        getUserData();
    }, []);

    async function getUserData() {
        const response = await api.get(`user/${userId}`);
        setStates(response.data);
    };

    function setStates(dados) {
        setName(dados.data[0].name);
        setEmail(dados.data[0].email);
        setProfilePicIndex(dados.data[0].profile_image_index);
        setTotalPosts(dados.total);
        setTotalPublicPosts(dados.publicTotal);
        setTotalPrivatePosts(dados.total - dados.publicTotal);
    };

    return (
        <div className="profile-container">
            <Link to="/diario" className="back-link">
                <FiArrowLeft color="#00BFA6" size={18} />
                <span>Voltar</span>
            </Link>
            <div className="user-picture">
                <div className="picture">
                    {
                        !profilePicIndex
                            ? <img className="profile-picture" src={images.image0} alt="Diario Online" />
                            : <img className="profile-picture" src={images[`image${profilePicIndex}`]} alt="Diario Online" />
                    }
                </div>
                <Link to='profile/picture'>Selecionar outra foto de perfil</Link>
            </div>
            <div className="user-data">
                <h1>Nome:</h1>
                <span className="data">{name}</span>
                <h1>Email:</h1>
                <span className="data">{email}</span>
                <h1>Total de posts:</h1>
                <span className="data">{totalPosts}</span>
                <h1>Total de posts públicos:</h1>
                <span className="data">{totalPublicPosts}</span>
                <h1>Total de posts privados:</h1>
                <span className="data">{totalPrivatePosts}</span>
            </div>
        </div>
    );
};


export default Profile;