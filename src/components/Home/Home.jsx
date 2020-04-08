import React from 'react';
import './Home.css';
import write from '../../assets/write.svg';
import { Link } from 'react-router-dom';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

function Home() {
    return (
        <div className='container'>
            <div className="intro-text">
                <h1>Diário Online</h1>
                <h2>Escreva tudo que venha à mente.</h2>
                <p>Se cadastre e venha depositar aqui seus pensamentos.</p>
                <div className="buttons-container">
                    <Link to="/register">
                        <button>
                            <FiUserPlus color="#fff" size={18} />
                            <span>Cadastrar</span>
                        </button>
                    </Link>
                    <Link to="/login">
                        <button>
                            <FiLogIn color="#fff" size={18} />
                            <span>Entrar</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="img-intro" alt="Diário Online">
                <img src={write} alt="Diario Online"/>
            </div>
        </div>
    );
};

export default Home;