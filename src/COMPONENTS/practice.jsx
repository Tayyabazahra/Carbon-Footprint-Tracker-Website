import React from 'react';
import './practice.css'

export default function Practice(props) {
  return (
    <>
    <section>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="flip">
        <div className="cover item-a" style={{ backgroundImage: `url(${props.image})` }}>
          <h1>{props.heading}</h1>
          <div class="flip-back">
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
 
  
</section>
    </>
  );
}
