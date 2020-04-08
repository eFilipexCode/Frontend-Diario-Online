import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import { FiChevronDown, FiPower } from 'react-icons/fi';

function Header() {

    const history = useHistory();
    const username = localStorage.getItem('diario-online-name');

    let logoutFlag = false;
    function showLogout() {
        const logout = document.querySelector('.logout-container');
        logoutFlag = !logoutFlag;
        logout.style.display = logoutFlag ? 'flex' : 'none';
    };

    function logout() {
        localStorage.clear();
        history.push('/');
    };

    return (
        <div className="header-container">
            <div className="menu-links">
                <ul>
                    <li><Link to="/profile">Perfil</Link></li>
                    <li><Link to="/public">Post Públicos</Link></li>
                </ul>
            </div>
            <span className="menu-options" onClick={e => showLogout()}>
                <span className="user-name">Olá, {username}<FiChevronDown color="#00BFA6" size={18} /></span>
                <div className="logout-container">
                    <button onClick={e => logout()}>
                        <FiPower color='red'/> <span>Logout</span>
                    </button>
                </div>
            </span>
        </div>
    );
};

export default Header;