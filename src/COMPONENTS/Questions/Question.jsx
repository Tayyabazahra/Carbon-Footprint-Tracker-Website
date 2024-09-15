import React from 'react';
import '../calculate.css';

const Question = ({ question, unit, value, onChange }) => {
  return (
    <div className="question">
      <label htmlFor="inputbox">{question}</label>
      <div className="input-container">
        <input
          type="number"
          name="inputbox"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="input"
          id="inputbox"
        />
        {unit && <span className="unit">{unit}</span>}
      </div>
    </div>
  );
};

export default Question;