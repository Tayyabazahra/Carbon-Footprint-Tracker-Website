import React from 'react';
import './Hero.css';
import Cover from './images/forest.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='video' autoPlay loop muted>
        <source src={Cover} type='video/mp4' />
      </video>
      <div className='overlay'>
        <div className='inner'>
          <h1 className='mainhead'>Track Your <br/> Carbon Footprint</h1>
          <p className='mainpara'>What are you waiting for?Empower yourself to <br/> make eco-conscious choices with our carbon <br/>tracking platform.</p>
          <button className='btn'>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
