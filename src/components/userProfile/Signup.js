import React, { useState } from 'react';
import '../../styles/userProfile/Signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      age: parseInt(age),
      acceptedTerms,
    };

    try {
      let body = '';
      console.log('try to register');
      const response = await fetch('https://juvoproject.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('payload', body);
      console.log('response', response);
      console.log('response status', response.status);

      const result = await response.text();
      if (response.ok) {
        alert('Registration successful! ✅');
        console.log(result);
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert(`Registration failed: ${result} ❌`);
        console.error(result);
      }
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            min="18"
            required
            onInvalid={(e) => e.target.setCustomValidity('You must be at least 18 years old to register.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </div>

        {/* New checkbox for acceptedTerms */}
        <div className="form-group" style={{ marginTop: '15px' }}>
          <input
            className="termsCheckbox"
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
          />
          I agree to the Terms and Conditions
        </div>

        <button className="submit-signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
