import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate directly
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize navigate outside of the function

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5274/api/User/login', {
        email: email,
        password: password,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

      console.log(response.data); 

      const userId = response.data.userId; 
      localStorage.setItem('id', userId);
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className='signupbody'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <i className='bx bxs-user'></i>
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className='remember-forget'>
            <label>
              <input type='checkbox' />
              Remember me
            </label>
            <a href='#'>Forgot Password</a>
          </div>

          <button type='submit' className='btn'>
            Login
          </button>

          <div className='register-link'>
            <p>
              Don't have an account?
              <Link to="/Signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
