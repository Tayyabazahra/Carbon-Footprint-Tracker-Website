import React from 'react';
import '../Aboutus.css';
import Practice from '../practice';

function Aboutus() {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="A-div">
            <div>
              <span id = 'b1' className="badge-2">About us</span>
              <h1 className="A-head">
                Our Mission: Track and <br /> Reduce Carbon Footprints
              </h1>
              <p className="A-text">
                We're dedicated to helping individuals like you understand and
                reduce their environmental impact. Our user-friendly platform
                allows you to easily track your carbon footprint, providing
                personalized insights and tips for reducing emissions in your
                daily life. Whether you're interested in lowering your energy
                consumption, optimizing your transportation choices, or making
                more sustainable purchasing decisions, we're here to guide you
                towards a greener lifestyle. Join us on our mission to create
                a healthier planet for ourselves and future generations. Let's
                make every step count towards a more sustainable future!
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="globe-container">
            <img
              className="globe"
              src="https://assets-global.website-files.com/6596bed8529344105dcc71dd/65c1eae8e6c2a3fdaa034972_65b23dc8eac6b5b12af340d1_image_8-removebg-preview2.png"
              alt="plant"
            />
          </div>
        </div>
      </div>
      <h1 id='h2' className="A-head">Our Goals</h1>
      <div className="practice-cards">
        <div className="practice-cards-container">
          <Practice heading={(<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Promoting <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Environmental<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Awareness</>)}
          paragraph=' Our goal is to foster a deeper understanding  of the connection between individual actions and their impact on the environment, ultimately contributing to a greener Earth.
          By providing insights into carbon emissions we aim to inspire users to adopt sustainable
          behaviors that contribute to a healthier planet.'/>
          
          <Practice heading='Improving Air Quality' paragraph='We are committed to helping users reduce 
          their carbon footprint to improve air quality and create healthier living environments. Through
          tracking and reducing emissions from transportation, energy consumption, and other sources, we aim to mitigate air pollution and promote cleaner, fresher air.' />
          
          <Practice heading={(<>Supporting Global <br />Sustainability Efforts</>)}
          paragraph='Our goal extends beyond individual actions to support broader sustainability initiatives
          aimed at preserving our planets health. By empowering users to track and reduce their carbon footprint,
          we aim to contribute to global efforts to combat climate change'
          />

        </div>
      </div>
    </>
  );
}

export default Aboutus;
