import React, { useState } from 'react';
import './Login.css';
import login from '../../assets/login.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api.js';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function requestLogin(e) {
        e.preventDefault();
        
        if(!password || !email) {
            return alert('Preencha as informações corretamente.');
        }
        
        setLoading(true);
        if (loading) {
            return;
        };

        const data = { email, password };

        try {
            setLoading(false);
            const response = await api.post('signin', data);
            
            localStorage.setItem('diario-online-user-id', response.data.user.id);
            localStorage.setItem('diario-online-name', response.data.user.name);
            localStorage.setItem('diario-online-logged', true);

            history.push('/diario');
        } catch (err) {
            incorrectLogin();
            setLoading(false);
        }
    };

    function incorrectLogin() {
        const failedP = document.querySelector('.login-failed');
        const inputEmail = document.querySelector('.email-input');
        const inputPassword = document.querySelector('.password-input');

        failedP.style.display = 'block';
        inputEmail.style.border = '3px solid red';
        inputPassword.style.border = '3px solid red';

        setTimeout(() => {
            inputEmail.style.border = '0px';
            inputPassword.style.border = '0px'
        }, 3000);
    };

    return (
        <div className="container-login">
            <div className="intro-login">
                <img src={login} alt="Entre com sua conta" />
                <Link to="/">
                    <FiArrowLeft color="#00BFA6" size={18} />
                    <span>Voltar</span>
                </Link>
            </div>
            <div className="container-form">
                <h1>Vamos lá!</h1>
                <form onSubmit={e => requestLogin(e)} className="form">
                    <input
                        className="email-input"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        type="email" />
                    <input
                        className="password-input"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="Sua senha secreta..."
                        type="password" />
                    <p className="login-failed">Senha ou email incorreto(a).</p>
                    <button type='submit' onClick={requestLogin} className={loading ? 'isLoading' : 'no-load'}>
                        Entrar!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;