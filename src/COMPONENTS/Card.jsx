import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <h3 className='card1-heading'>{props.head}</h3>
      <p className='card1-paragraph'>{props.text}</p>
    </div>
  );
}

export default Card;
