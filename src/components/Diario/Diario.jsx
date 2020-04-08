import React from 'react';
import './Diario.css';
import Header from '../Header/Header.jsx';
import PostContainer from '../PostsContainer/PostsContainer.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';

function Diario() {
    document.title = 'Diário Online';
    return (
        <div className="diario-container">
            <Header />
            <PostContainer />
            <StartScreen />
        </div>
    );
};

export default Diario;