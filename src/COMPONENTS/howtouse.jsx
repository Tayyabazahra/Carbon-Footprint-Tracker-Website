import React from "react";
import './howtouse.css';
import Phone from './images/Phone Mockup.png'

function Howtouse() {
  return (
    <div>
      <div className="container2">
      <div className="left2">
            <img
              className="phone"
              src={Phone}
              alt="phone"
            />
        </div>
        <div className="right2">
          <div className="A-div2">
            <div>
              <span id = 'b12' className="badge-2">About us</span>
              <h1 className="A-head2">
                How to Use
              </h1>
              <p className="A-text2">
              <p>Our carbon footprint calculator is a powerful tool designed to help you understand the 
          environmental impact of your lifestyle choices. By inputting data on various aspects of your
          daily activities, such as transportation habits, energy consumption, waste generation, and 
          dietary preferences, the calculator estimates your carbon emissions in metric tons of CO2 
          equivalent. Using industry-standard methodologies and emission factors, it provides 
          you with a clear breakdown of your carbon footprint, allowing you to identify which areas of
          your life contribute most to greenhouse gas emissions. With this insight, you can make 
          informed decisions and take meaningful steps towards reducing your environmental impact. 
        </p>

              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Howtouse