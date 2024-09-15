import React from 'react';
import { useLocation, Routes, Route, Link } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import SignUp from './pages/Signup';
import QuestionForm from './Questions/QuestionForm';
import Login from './pages/Login';
import logoImg from './images/logo-img.png';
import Donate from './Donationform';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const hideNavbarPaths = ['/Signup', '/Questions/QuestionForm' , '/Login']; 
  const showNavbar = !hideNavbarPaths.some(path => location.pathname.includes(path));

  return (
    <div>
      {showNavbar && (
        <div className='navbar '>
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
        <Route path='/Questions/QuestionForm' element={<QuestionForm/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/Donationform' element={<Donate />} />

      </Routes>
    </div>
  );
}

export default Navbar;