import React from 'react';
import '../Aboutus.css';
import Practice from '../practice';
import Howtouse from '../howtouse';
import Piecharticon from '../images/piechart.png';
import Rocketicon from'../images/Rocketicon.png';
import Carousel from '../Crousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


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





      <div className="space-y-3">
      <h2 className="headingbenefit">
        The Benefits of Using Our Carbon Footprint Tracker
      </h2>
      <p className="description">
        Reduce your environmental impact and live a more sustainable lifestyle with our easy-to-use tools.
      </p>
      
      <div className="grid-container">
        <div className="benefitcard">
          <div className="icon-container">
            <img src='https://static.vecteezy.com/system/resources/thumbnails/010/852/913/small_2x/leaf-icon-vector-png.png' className="icon" />
          </div>
          <h3 className="card-title">Reduce Your Impact</h3>
          <p className="card-description">
            Our tracker helps you identify and reduce the areas of your life with the highest carbon emissions.
          </p>
        </div>
        
        <div className="benefitcard">
          <div className="icon-container">
            <img src={Piecharticon} className="icon" />
          </div>
          <h3 className="card-title">Understand Your Footprint</h3>
          <p className="card-description">
            Get a detailed breakdown of your carbon emissions across different areas of your life.
          </p>
        </div>
        
        <div className="benefitcard">
          <div className="icon-container">
            <img src={Rocketicon} className="icon" />
          </div>
          <h3 className="card-title">Make a Difference</h3>
          <p className="card-description">
            Take actionable steps to reduce your carbon footprint and contribute to a more sustainable future.
          </p>
        </div>
      </div>
    </div>




    <Howtouse/>


      <h1 id='h2' className="A-head">Our Goals</h1>
      <p className="A-text" id='p3'>Our mission is to empower individuals like you to make informed decisions and take meaningful actions towards reducing carbon emissions. Through innovative tools and resources, we strive to support your journey towards a more
        sustainable lifestyle. Join us in our commitment to preserving the planet for future generations</p>
 
      <div className="crouselcontainer">
       <Carousel/>
      </div>
      <div class="headingarticle">
        <h2>Carbon Chronicles </h2>
        <h3>Exploring Our Environmental Impact</h3>
      </div>
      <div className="articlecontainer">  
      <div className="card" style={{ width: '18rem' }}>
      <img src="https://media.licdn.com/dms/image/D5612AQG165WkQ2h95Q/article-cover_image-shrink_423_752/0/1705389677752?e=1722470400&v=beta&t=gSDujzuyWmBlOzCUPxiVyyGz0e2ap0tK5h52YTkIL34" className="card-img-top1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Navigating Sustainable Transportation</h5>
        <p className="card-text">
        Mass transit, especially passenger rail, can significantly reduce emissions and boost transportation efficiency, per the IEA.
        </p>
        <a href="https://climate.selectra.com/en/advice/sustainable-transport" className="btn " id="btn1">
          Read More
        </a>
      </div>
    </div>
    
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://lightlife.com/wp-content/uploads/2023/05/Untitled-design-42.png" className="card-img-top1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Strategies for Carbon Neutrality</h5>
        <p className="card-text">
        Sustainable investing is rising as investors prioritize environmental and social issues, driven by increased awareness and government support. 
        </p>
        <a href="https://www.europarl.europa.eu/topics/en/article/20190926STO62270/what-is-carbon-neutrality-and-how-can-it-be-achieved-by-2050" className="btn " id="btn2">
          Read More
        </a>
      </div>
    </div>
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://therenewables.org/wp-content/uploads/2023/10/Role-of-Green-Technology-in-Tackling-Climate-Change.png.webp" className="card-img-top1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Tech Sector Tackling Climate Change</h5>
        <p className="card-text">
        AI aids climate change efforts by optimizing energy use, improving transportation, enhancing agriculture, and managing disasters.
        </p>
        <a href="https://abmagazine.accaglobal.com/global/articles/2023/specials/big-tech-special-edition-april-2023/the-rise-of-climate-tech.html" className="btn " id="btn3">
          Read More
        </a>
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
    </>
  );
}

export default Aboutus;