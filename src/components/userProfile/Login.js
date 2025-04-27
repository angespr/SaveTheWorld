import React, { useState } from 'react';
import '../../styles/userProfile/Login.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSignupClick = () => { navigate('/signup'); };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a login request to the backend
      const response = await fetch('http://198.244.96.156:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // store token in localStorage
        navigate('/');
      } else {
        const errorData = await response.text();
        setErrorMessage(errorData || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='logo-container'>
          <img className='logo-img' src={logo} alt="logo" />
          <h2>juvo</h2>
        </div>

        <h2 className='titleLogin'>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage('');
          }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage('');
          }}
          required
        />

        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}>
            {errorMessage}
          </div>
        )}

        <button className="login-btn" type="submit">Login</button>

        <p className="signUpLink" onClick={handleSignupClick}>
          Sign Up
        </p>
      </form>
    </div>
  );
};

export default Login;
