import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Homepage from './Homepage';
import Calculate from './Calculate';
import logoImg from './logo-img.png';

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <img className='logo' alt='logo' src={logoImg} width="80px" height="80px" />
        <ul className='navlist'>
          <li><Link to='/' className='navlink'>Home</Link></li>
          <li><Link to='/Aboutus' className='navlink'>About Us</Link></li>
          <li><Link to='/calculate' className='navlink'>Calculate</Link></li>
        </ul>
      </div>
     {/*} 
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Aboutus' element={<Aboutus/>} />
        <Route path='/calculate' element={<Calculate/>} />
      </Routes> 
  */}
    </div>
  
  );
}

export default Navbar;