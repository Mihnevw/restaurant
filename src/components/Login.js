import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import * as AuthService from '../services/AuthService';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)

    setTimeout(() => {
      AuthService.login(email, password)
        .then((data) => {
          login(data);
          setSuccess('Успешно влизане');
          setError('');
          navigate('/');
        })
        .catch(err => {
          setSuccess('');
          setError('Невалидни данни за вход');
        })
        .finally(() => {
          setIsLoading(false); // Спира спинера
        });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} method='POST'>
      <h2>Вход</h2>
      {isLoading && <div className="loader-overlay"><div className="loader"></div></div>}

      {success && <div style={successStyle}>{success}</div>}
      {error && <div style={errorStyle}>{error}</div>}

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
      <button type="submit" style={buttonStyle} disabled={isLoading}>Вход</button>
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

const successStyle = {
  color: '#4F8A10',
  backgroundColor: '#DFF2BF',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '15px',
  textAlign: 'center',
};

const errorStyle = {
  color: '#D8000C',
  backgroundColor: '#FFBABA',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '15px',
  textAlign: 'center',
};

const loaderStyle = {
  display: 'inline-block',
  width: '15px',
  height: '15px',
  border: '3px solid #f3f3f3',
  borderRadius: '50%',
  borderTop: '3px solid #FEA116',
  animation: 'spin 1s linear infinite',
};


export default LoginForm;
