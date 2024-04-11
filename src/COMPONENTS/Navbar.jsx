import React from 'react';
import { useLocation } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import SignUp from './pages/Signup';
import logoImg from './images/logo-img.png';
import './Navbar.css';
import { Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const showNavbar = !location.pathname.includes('/Signup'); // Hide navbar on Signup page

  return (
    <div>
      {showNavbar && (
        <div className='navbar'>
          <img className='logo' alt='logo' src={logoImg} width="80px" height="80px" /> 
          <ul className='navlist'>
            <li className='nav-item'><Link to='/' className='navlink'>Home</Link></li>
            <li className='nav-item'><Link to='/Aboutus' className='navlink'>About us</Link></li>
            <li className='nav-item'><Link to='/Calculate' className='navlink'>Calculate</Link></li>
            <li className='nav-item'><Link to='/Signup' className='navlink'>Sign Up</Link></li>
          </ul>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Calculate' element={<Calculate />} />
        <Route path='/Signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Navbar;