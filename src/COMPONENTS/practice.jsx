import React from 'react';
import './practice.css'

export default function Practice(props) {
  return (
    <>
    <section>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="card">
        <div class="cover item-a">
          <h1>{props.heading}</h1>
          <div class="card-back">
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
 
  
</section>
    </>
  );
}
