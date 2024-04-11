import React from 'react';
import HeroSection from '../Hero';
import Linechart from '../Linechart';
import '../Cardsection.css';
{/*import Card from '../Card';
import Awareness from '../images/awareness.png'
import Goals from '../images/goals.png'
import Takeaction from '../images/takeaction.png'
 */}


function Home() {
  return (
    <>
    <HeroSection />

   
    <div className='secondcontainer'>
    <div className='left'>
    <div className='spacer'></div>
     <div className='bagediv'><span className='badge-1'>Why Track Your Footprint</span></div>
     <h2 className='whytrackhead'>Understanding the Impact</h2>
     <p className='whytrackpara'>Tracking your carbon footprint isn't just about numbers. It's about 
     understanding the impact of your actions on the planet. It's about taking responsibility for the 
     emissions you produce and making a commitment to reduce them. Carbon emissions contribute to climate change,
     leading to rising temperatures, extreme weather events, and sea-level rise.It's important to track and reduce 
     our carbon footprint to protect the planet for future generations.</p>
    </div>
     <div className='right'>
     <Linechart/>
     </div>





    {/*} <div className='cardcontainer'>
      <Card 
      head="Raise Awareness" 
      image={Awareness}
      text="By tracking your carbon footprint,
      you become more aware of the impact of your daily actions on the environment." />

      <Card head="Set Goals" C
        image={Goals}
        text="Once you know your carbon footprint, you can set
        goals to reduce it" />

      <Card head="Take Action"
      image={Takeaction}
        text="Tracking your carbon footprint empowers you to
        take action to reduce it, whether its by making small changes in your lifestyle " />
    </div>*/}
   
  </div>
  </>
  );
}

export default Home;
