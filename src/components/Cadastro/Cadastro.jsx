import React, { useState } from 'react';
import cadastro from '../../assets/cadastro.svg';
import './Cadastro.css';
import { FiArrowLeft } from 'react-icons/fi'; 
import { Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js';

function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmpassword] = useState();

    const history = useHistory();


    function passwordCheckFailed() {
        alert("Senhas não coincidem.");
    }

    async function register(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            username,
            password
        };

        if (confirmPassword !== password) {
            passwordCheckFailed();
            return;
        }

        try {
            await api.post('register', data);
            history.push('/login');
        } catch (err) {
            alert('Ops, algo deu errado. Tente novamente!');
        }
    };

    return (
        <div className="cadastro-container">
            <div className="back-container">
                <img src={cadastro} alt="Simples diário online"/>
                <Link to="/"> 
                    <FiArrowLeft color="#00BFA6" size={18}/>
                    <span>Voltar</span>
                 </Link>
            </div>

            <div className="form-container">
                <h1>Estamos quase lá!</h1>
                <p>Que bom que vai começar a escrever.</p>
            <form onSubmit={e => register(e)}>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name} 
                    placeholder="Nome"></input>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    placeholder="Email"></input>
                <input 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} 
                    placeholder="Nome de usuário"/>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                    placeholder="Senha"></input>
                <input
                    type="password" 
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    value={confirmPassword} 
                    placeholder="Ela mais uma vez..."></input>
                <button type="submit">Registrar!</button>
            </form>
            </div>
        </div>
    );
};

export default Cadastro;