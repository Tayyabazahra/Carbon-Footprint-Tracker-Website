import React from 'react';
import Globe from './carglobe.gif'

function Homepage() {
  return (
    <div>
      <div className='headingcontainer'>
        <img className='phone' src={Globe} />
        <h1 className='mainheading'>CALCULATE <br/> & CUT <br/>CARBON</h1>
      </div>
    </div>
  );
}

export default Homepage;
