import React from 'react';
import Card from './Card';


export default function Homepage() {
  return (
    <>
  <div className='main'>
    <div className="firstcontainer">
      <div className="globe-container">
        <img src="https://assets-global.website-files.com/6596bed8529344105dcc71dd/65c1eae8e6c2a3fdaa034972_65b23dc8eac6b5b12af340d1_image_8-removebg-preview2.png" alt="Globe" className="globe" />
      </div>
      <div className="heading">
        <h1>
          CALCULATE <br/> & <br/> CUT CARBON
          <p>Track your impact and discover ways to make a difference with our easy-to-use platform.</p>

        </h1>
      </div>
    </div>

    <div className='secondcontainer'>
      <p><span className='badge-1'>Why Track Your Footprint</span></p>
      <h2 className='whytrack'>Understanding the Impact</h2>
      <p className='whytrackpara'>Tracking your carbon footprint isn't just about numbers. It's about understanding the impact of your actions on the planet. It's about taking responsibility for the emissions you produce and making a commitment to reduce them. Whether you're an individual, a business, or a community, tracking your carbon footprint is the first step towards a more sustainable future</p>
    
    
    <div className='cardcontainer'>
    <Card  head="Raise Awareness" text="By tracking your carbon footprint,
     you become more aware of the impact of your daily actions on the environment."  />

    <Card  head="Set Goals" text="Once you know your carbon footprint, you can set 
    goals to reduce it, such as using public transportation or conserving energy." />

    <Card  head="Take Action" text="Tracking your carbon footprint empowers you to 
    take action to reduce it, whether its by making small changes in your lifestyle or supporting environmental initiatives" />
   </div>


   </div>
   </div>
  
    </>

  );
}
