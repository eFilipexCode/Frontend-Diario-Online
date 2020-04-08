import React from 'react';
import './Picture.css';
import images from '../../utils/profileImages.js';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api.js';

function Picture() {

    const userId = localStorage.getItem('diario-online-user-id');
    const history = useHistory();

    function setImage(pictureId) {
        try {
            api.post('profile/picture', {imageIndex: pictureId}, {
                headers: {
                    Authorization: userId
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('There was an error. Please try again.');
        }
    };

    return (
        <div className="pictures-container">
            <div className="back-link">
                <Link to="/profile">
                    <FiArrowLeft color="#00BFA6" size={18} />
                    <span>Voltar</span>
                </Link>
            </div>
            <div className="images">
                <img onClick={() => setImage(1)} src={images.image1} alt="Diario Online" />
                <img onClick={() => setImage(2)} src={images.image2} alt="Diario Online" />
                <img onClick={() => setImage(3)} src={images.image3} alt="Diario Online" />
                <img onClick={() => setImage(4)} src={images.image4} alt="Diario Online" />
                <img onClick={() => setImage(5)} src={images.image5} alt="Diario Online" />
                <img onClick={() => setImage(6)} src={images.image6} alt="Diario Online" />
                <img onClick={() => setImage(7)} src={images.image7} alt="Diario Online" />
                <img onClick={() => setImage(8)} src={images.image8} alt="Diario Online" />
                <img onClick={() => setImage(9)} src={images.image9} alt="Diario Online" />
                <img onClick={() => setImage(10)} src={images.image10} alt="Diario Online" />
                <img onClick={() => setImage(11)} src={images.image11} alt="Diario Online" />
                <img onClick={() => setImage(12)} src={images.image12} alt="Diario Online" />
                <img onClick={() => setImage(13)} src={images.image13} alt="Diario Online" />
            </div>
        </div>
    );
};

export default Picture;