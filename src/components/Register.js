import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import * as AuthService from '../services/AuthService';

function RegisterForm() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        AuthService.register(
            email,
            password,
            confirmPassword
        )
            .then(data => {
                login(data)

                navigate('/')
            })
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Регистрация</h2>
            <div style={inputGroupStyle}>
                <label htmlFor="email">Имейл:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div style={inputGroupStyle}>
                <label htmlFor="password">Парола:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div style={inputGroupStyle}>
                <label htmlFor="confirmPassword">Потвърдете паролата:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={buttonStyle}>Регистрация</button>
        </form>
    );
}

// Примерен CSS стил
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const inputGroupStyle = {
    marginBottom: '15px',
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: '#FEA116',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default RegisterForm;
