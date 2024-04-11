import React from 'react';
import Card from './Card';
import Awareness from './images/awareness.png'
import Goals from './images/goals.png'
import Takeaction from './images/takeaction.png'


export default function Homepage() {
  return (
    <>

  <div className='maincontainer'>


    {/*         PAGE#1 -------- Calculate your footprint                  */}



        <div className="firstcontainer">
          <img className='plantimage' src={Plant} alt='plant'></img>
          <div className='m-2'>
            <h1 className='heading'>Calculate your <br/> carbon footprint</h1>
            <p className='p-2'>The average person emits 4.6 metric tons of CO2 per year. Learn how you can reduce your impact.</p>
            <button className='startbutton'>Get Started</button>
          </div>
        </div>
       


        {/*         PAGE#2 --------  Understanding the Impact                   */}


        <div className='secondcontainer'>
          <p><span className='badge-1'>Why Track Your Footprint</span></p>
          <h2 className='whytrackhead'>Understanding the Impact</h2>
          <p className='whytrackpara'>Tracking your carbon footprint isn't just about numbers. It's about 
          understanding the impact of your actions on the planet. It's about taking responsibility for the 
          emissions you produce and making a commitment to reduce them. Carbon emissions contribute to climate change,
          leading to rising temperatures, extreme weather events, and sea-level rise.It's important to track and reduce our carbon footprint to protect the planet for future generations.Whether you're an individual, a business, 
          or a community, tracking your carbon footprint is the first step towards a more sustainable future</p>
          <div className='cardcontainer'>
            <Card 
            head="Raise Awareness" 
            image={Awareness}
            text="By tracking your carbon footprint,
            you become more aware of the impact of your daily actions on the environment." />

            <Card head="Set Goals" 
              image={Goals}
              text="Once you know your carbon footprint, you can set
              goals to reduce it, such as using public transportation or conserving energy." />

            <Card head="Take Action"
            image={Takeaction}
              text="Tracking your carbon footprint empowers you to
              take action to reduce it, whether its by making small changes in your lifestyle or supporting environmental initiatives" />
          </div>
        </div>



        {/*        PAGE#03-------The impact of carbon emissions                


        <div className='thirdcontainer'>
          <h2 className='impacthead'>The impact of carbon emissions</h2>
          <p className='impactpara'>Carbon emissions contribute to climate change, leading to rising temperatures, extreme weather events, and sea-level rise. It's important to track and reduce our carbon footprint to protect the planet for future generations.</p>
        </div>


        */}








      </div>
    </>
  );
}
