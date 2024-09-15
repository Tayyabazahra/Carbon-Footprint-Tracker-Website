import React from 'react';
import {Link } from 'react-router-dom';
import '../calculate.css';

function Calculate() {
  return (
    <div className="calcdiv">
    <div className='diff'>
      <h1>READY TO <br/>MAKE A DIFFERENCE?</h1>
      <h6>Understand your environmental impact and take steps to <br/> reduce your carbon footprint with our easy-to-use calculator.</h6>
      <Link to="/Questions/QuestionForm">
        <button className='gotobutton'>Start Tracking</button>
      </Link>
    </div>
    </div>
  );
}

export default Calculate;
