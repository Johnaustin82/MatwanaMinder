import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

// Import the image
import backgroundImage from '../assets/road.webp';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('access_token', data.access_token); // Store token
        navigate('/dashboard'); // Redirect to a dashboard or home page after login
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p>Please enter your email and password to log in.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="sign-up-prompt">
          Don't have an account? <a href="/sign">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
