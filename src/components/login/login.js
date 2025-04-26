import React, { useState } from 'react';
import '../login.css';
import logo from '../../assets/logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
     
      <form className="login-form" onSubmit={handleSubmit}>
    <div className='theLogo'>
      <img className='avatar' src= {logo} alt="the logo" /> {}
      <h2 className='juvoTitle'>juvo</h2>
      </div>
        <h2 className='titleLogin'>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className="signUpLink" onClick={() => window.location.href = 'http://localhost:3000/#/signup'}> Sign Up </p>

      </form>
    </div>
  );
};

export default LoginPage;
