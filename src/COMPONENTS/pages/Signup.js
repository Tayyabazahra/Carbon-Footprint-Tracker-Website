import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate together
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Added useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5274/api/User/create', {
        userId: 0, 
        username: username,
        email: email,
        password: password,
      });
      setSuccessMessage("User created successfully! Please log in.");
      navigate('/Login'); // Redirect to home page

    } catch (error) {
      setErrorMessage("An error occurred during signup. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className='signupbody'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          {successMessage && <p className='success-message'>{successMessage}</p>}
          <div className='input-box'>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <i className='bx bxs-user'></i>
          </div>

          <div className='input-box'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <i className='bx bxs-user'></i>
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <button type='submit' className='btn'>
            Sign up
          </button>

          <div className='register-link'>
            <p>
              Already have an account?
              <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
