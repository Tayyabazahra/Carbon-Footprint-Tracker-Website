import React from 'react';
import HomeCalculator from './Homecalculator';
import Transportcalculator from './Transportcalculator';
import Lifestylecalculator from './Lifestylecalculator';

const Report = ({ answers, selectedCategory }) => {
  // Define steps to reduce carbon footprint
  const reductionSteps = [
    "Switch to energy-efficient light bulbs",
    "Reduce energy usage by unplugging electronics when not in use",
    "Use public transportation or carpooling more frequently",
    "Reduce water consumption by fixing leaks and using water-saving appliances",
    // Add more steps as needed
  ];

  return (
    <div className="report-container">
      {selectedCategory === "home" && (
        <div className="home-calculator">
          <HomeCalculator answers={answers} />
        </div>
      )}
      {selectedCategory === "transport" && (
        <div className="transport-calculator">
          <Transportcalculator answers={answers} />
        </div>
      )}
      {selectedCategory === "lifestyle" && (
        <div className="lifestyle-calculator">
          <h2 className="breakdownhead">Lifestyle Carbon Footprint</h2>
          <Lifestylecalculator answers={answers} />
        </div>
      )}

      {/* Display reduction steps */}
      <div className="reduction-steps">
        <h2>Steps to Reduce Carbon Footprint:</h2>
        <ul>
          {reductionSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
