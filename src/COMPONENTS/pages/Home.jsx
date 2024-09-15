import React, { useRef } from 'react';
import Main from '../Main';
import Linechart from '../Linechart';
import '../Home.css';
import whatisCF from '../images/CF-definition.mp4';
import { Link} from 'react-router-dom';

function Home() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Main />   
      <div className='secondcontainer'>
        <div className='left'>
          <div className='spacer'></div>
          <div className='bagediv'><span className='badge-1'>Why Track Your Footprint</span></div>
          <h2 className='whytrackhead'>Understanding the Impact</h2>
          <p className='whytrackpara'>
            Tracking your carbon footprint isn't just about numbers. It's about understanding the impact of your 
            actions on the planet. Carbon emissions contribute to climate change, leading to rising temperatures,
            extreme weather events, and sea-level rise. It's important to track and reduce our carbon footprint to
            protect the planet for future generations.
          
          </p>
        </div>
        <div className='chart'>
          <Linechart />
        </div>

        <div className="whatiscontainer">
          <div className="text-section2">
            <h1 className="heading2">What is Carbon Footprint?</h1>
            <p className="description2">
               A carbon footprint represents the total greenhouse gas emissions
               caused directly and indirectly by an individual, organization, event, or product, expressed in
                equivalent tons of carbon dioxide (CO2e). This footprint encompasses various activities, 
                including energy use for heating, electricity, and transportation; manufacturing processes;
                 food production, from agriculture to processing; waste management practices; and land use changes
                <br/>By quantifying these emissions, the carbon footprint provides a comprehensive measure 
                of the impact on the environment, highlighting areas where efforts can be made to reduce emissions
                 and mitigate climate change.
              The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world. Globally, the average carbon footprint is closer to 4 tons. To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per year needs to drop to under 2 tons by 2050.
            </p>
          </div>
          <div className="video-section2">
            <video
              width="100%" 
              height="315" 
              src={whatisCF}
              onClick={handleVideoClick}
              ref={videoRef}
              loop
            ></video>
          </div>
        </div>

        <div className="donatecontainer">
          <div className="donatemaincontainer">
            <div className="left-half"></div>
            <div className="right-half">
              <h1>Welcome!</h1>
              <p>Do your part to create a more sustainable future for our planet. Donate today and you’ll be a member, funding urgent direct conservation and advocacy. The power to protect and restore nature—now and for the next generation—is in your hands.</p>
              <Link to="/Donationform">
                <button>Donate</button>
              </Link>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Carbon Footprint Tracker. All rights reserved.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
