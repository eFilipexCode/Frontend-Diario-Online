import React from 'react';
import './StartScreen.css';
import { Link } from 'react-router-dom';

function StartScreen() {


    return (
        <div className="start-options">
            <div className="options">
                <h1>Olá! O que quer fazer?</h1>
                <Link to="/newpost" className="action">Escrever algum novo post</Link>
                <Link to="/public" className="action">Post Públicos</Link>
                <Link to="/myposts" className="action"> Meus Posts </Link>
            </div>
        </div>
    );
};

export default StartScreen; 