import React, { useState } from 'react';
import '../../styles/login/login.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom'; // <-- for navigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a login request to the backend
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Success! Redirect to homepage
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
        <div className='theLogo'>
          <img className='avatar' src={logo} alt="logo" />
          <h2 className='juvoTitle'>juvo</h2>
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

        <button type="submit">Login</button>

        <p className="signUpLink" onClick={() => window.location.href = '/#/signup'}>
          Sign Up
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
