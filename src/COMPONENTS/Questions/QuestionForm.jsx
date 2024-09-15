import React, { useState, useEffect } from 'react';
import Question from './Question';
import '../calculate.css';
import HomeCalculator from './Homecalculator';
import Transportcalculator from './Transportcalculator';
import Lifestylecalculator from './Lifestylecalculator';
import Report from './Report'; 

const QuestionForm = () => {
  const homeQuestions = [
    { id: 1, question: 'How much electricity do you use in your home?', unit: 'kWh', emissionFactorKey: 'electricity' },
    { id: 2, question: 'What percentage is purchased from a clean energy program?', unit: '%', emissionFactorKey: '' },
    { id: 3, question: 'What is your natural gas consumption?', unit: 'therms', emissionFactorKey: 'naturalGas' },
    { id: 4, question: 'How much heating oil and other fuels do you use?', unit: 'gallons', emissionFactorKey: 'heatingOil' },
    { id: 5, question: 'How many square feet is your living space?', unit: 'sq ft', emissionFactorKey: '' },
    { id: 6, question: 'How much water do you use annually?', unit: 'gallons', emissionFactorKey: '' },
    { id: 7, question: 'Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', unit: 'times', emissionFactorKey: '' }
  ];

  const transportQuestions = [
    { id: 8, question: 'How many miles do you typically travel by car each year?', unit: 'miles', emissionFactorKey: 'car' },
    { id: 9, question: 'What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', unit: 'mpg', emissionFactorKey: '' },
    { id: 10, question: 'How many miles do you travel by public transportation annually?', unit: 'miles', emissionFactorKey: 'publicTransport' },
    { id: 11, question: 'How many flights do you take each year, and what is the average distance per flight?', unit: 'miles', emissionFactorKey: 'flight' },
    { id: 12, question: 'How many miles do you travel by train or other forms of mass transit per year?', unit: 'miles', emissionFactorKey: 'train' },
    { id: 13, question: 'Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', unit: 'miles', emissionFactorKey: 'ridesharing' },
    { id: 14, question: 'How often do you walk or bike for transportation, and what is the average distance covered per trip?', unit: 'miles', emissionFactorKey: 'walkingBiking' },
    { id: 15, question: 'Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', unit: 'miles', emissionFactorKey: 'electricVehicle' },
    { id: 16, question: 'Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', unit: 'miles', emissionFactorKey: 'otherTransport' },
    { id: 17, question: 'How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', unit: 'miles', emissionFactorKey: 'car' }
  ];

  const lifestyleQuestions = [
    { id: 18, question: 'How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', unit: 'times/week', emissionFactorKey: 'applianceUsage' },
    { id: 19, question: 'What types of lighting fixtures do you have in your home, and how often are they used?', unit: 'hours/day', emissionFactorKey: 'lighting' },
    { id: 20, question: 'How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', unit: 'hours/day', emissionFactorKey: 'electronicDevices' },
    { id: 21, question: 'Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', unit: '', emissionFactorKey: '' },
    { id: 22, question: 'How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', unit: 'times/week', emissionFactorKey: 'cooking' },
    { id: 23, question: 'Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', unit: 'hours/week', emissionFactorKey: 'hobbies' }
  ];
  const categories = ['home', 'transport', 'lifestyle'];

  const [selectedCategory, setSelectedCategory] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ home: [], transport: [], lifestyle: [] });
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission status

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex, selectedCategory, answers]);

  const getQuestions = (category) => {
    switch (category) {
      case 'home':
        return homeQuestions;
      case 'transport':
        return transportQuestions;
      case 'lifestyle':
        return lifestyleQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(selectedCategory);

  const handleNext = () => {
    const currentAnswer = answers[selectedCategory][currentQuestionIndex];
    if (!currentAnswer || (typeof currentAnswer === 'string' && currentAnswer.trim() === '')) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.indexOf(selectedCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setSelectedCategory(categories[currentCategoryIndex + 1]);
        setCurrentQuestionIndex(0);
      } else {
        handleSubmit();
      }
    }
  };

  const handleChange = (value) => {
    const newAnswers = { ...answers };
    newAnswers[selectedCategory][currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };


  const handleSubmit = () => {
    setFormSubmitted(true);
  };




  {/*}
  const handleSubmit = async () => {
    try {
      const answersToSubmit = [];
      // Flatten the answers object into an array of objects
      categories.forEach(category => {
        answers[category].forEach((answer, index) => {
          answersToSubmit.push({
            userID: 'id',// You may replace this with the actual user ID
            questionID: index , 
            answer: answer,
          });
        });
      });
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answersToSubmit),
      };
  
      const response = await fetch('https://localhost:7281/api/User/submit', requestOptions);
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormSubmitted(true); // Set formSubmitted to true upon successful submission
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
*/}  


  return (
    <div className="page-container">
      <div className="header-container">
        <div className="button-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "highlighted" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`question-container ${
          selectedCategory === "home" ? "home-layout" : "transport-layout"
        }`}
      >
        <div className="question">
          <Question
            question={currentQuestion.question}
            unit={currentQuestion.unit}
            value={answers[selectedCategory][currentQuestionIndex] || ""}
            onChange={handleChange}
          />
          <button
            className="gotobutton"
            onClick={handleSubmit}
            disabled={
              !answers[selectedCategory][currentQuestionIndex] ||
              (typeof answers[selectedCategory][currentQuestionIndex] ===
                "string" &&
                answers[selectedCategory][currentQuestionIndex].trim() === "")
            }
          >
            {selectedCategory === categories[categories.length - 1] &&
            currentQuestionIndex === questions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default QuestionForm;




{/*import React, { useState, useEffect } from 'react';
import Question from './Question';
import '../calculate.css';
import HomeCalculator from './Homecalculator';
import TransportCalculator from './Transportcalculator';
import Lifestylecalculator from './Lifestylecalculator';

const QuestionForm = () => {
  const homeQuestions = [
    { id: 1, question: 'How much electricity do you use in your home?', unit: 'kWh', emissionFactorKey: 'electricity' },
    { id: 2, question: 'What percentage is purchased from a clean energy program?', unit: '%', emissionFactorKey: '' },
    { id: 3, question: 'What is your natural gas consumption?', unit: 'therms', emissionFactorKey: 'naturalGas' },
    { id: 4, question: 'How much heating oil and other fuels do you use?', unit: 'gallons', emissionFactorKey: 'heatingOil' },
    { id: 5, question: 'How many square feet is your living space?', unit: 'sq ft', emissionFactorKey: '' },
    { id: 6, question: 'How much water do you use annually?', unit: 'gallons', emissionFactorKey: '' },
    { id: 7, question: 'Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', unit: 'times', emissionFactorKey: '' }
  ];

  const transportQuestions = [
    { id: 8, question: 'How many miles do you typically travel by car each year?', unit: 'miles', emissionFactorKey: 'car' },
    { id: 9, question: 'What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', unit: 'mpg', emissionFactorKey: '' },
    { id: 10, question: 'How many miles do you travel by public transportation annually?', unit: 'miles', emissionFactorKey: 'publicTransport' },
    { id: 11, question: 'How many flights do you take each year, and what is the average distance per flight?', unit: 'miles', emissionFactorKey: 'flight' },
    { id: 12, question: 'How many miles do you travel by train or other forms of mass transit per year?', unit: 'miles', emissionFactorKey: 'train' },
    { id: 13, question: 'Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', unit: 'miles', emissionFactorKey: 'ridesharing' },
    { id: 14, question: 'How often do you walk or bike for transportation, and what is the average distance covered per trip?', unit: 'miles', emissionFactorKey: 'walkingBiking' },
    { id: 15, question: 'Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', unit: 'miles', emissionFactorKey: 'electricVehicle' },
    { id: 16, question: 'Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', unit: 'miles', emissionFactorKey: 'otherTransport' },
    { id: 17, question: 'How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', unit: 'miles', emissionFactorKey: 'car' }
  ];

  const lifestyleQuestions = [
    { id: 18, question: 'How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', unit: 'times/week', emissionFactorKey: 'applianceUsage' },
    { id: 19, question: 'What types of lighting fixtures do you have in your home, and how often are they used?', unit: 'hours/day', emissionFactorKey: 'lighting' },
    { id: 20, question: 'How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', unit: 'hours/day', emissionFactorKey: 'electronicDevices' },
    { id: 21, question: 'Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', unit: '', emissionFactorKey: '' },
    { id: 22, question: 'How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', unit: 'times/week', emissionFactorKey: 'cooking' },
    { id: 23, question: 'Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', unit: 'hours/week', emissionFactorKey: 'hobbies' }
  ];

  const categories = ['home', 'transport', 'lifestyle'];

  const [selectedCategory, setSelectedCategory] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ home: [], transport: [], lifestyle: [] });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex, selectedCategory, answers]);

  const getQuestions = (category) => {
    switch (category) {
      case 'home':
        return homeQuestions;
      case 'transport':
        return transportQuestions;
      case 'lifestyle':
        return lifestyleQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(selectedCategory);

  const handleNext = () => {
    const currentAnswer = answers[selectedCategory][currentQuestionIndex];
    if (!currentAnswer || (typeof currentAnswer === 'string' && currentAnswer.trim() === '')) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.indexOf(selectedCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setSelectedCategory(categories[currentCategoryIndex + 1]);
        setCurrentQuestionIndex(0);
      } else {
        handleSubmit();
      }
    }
  };

  const handleChange = (value) => {
    const newAnswers = { ...answers };
    newAnswers[selectedCategory][currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  const handleSubmit = () => {
    console.log("Answers submitted:", answers);
  };

  const isLastQuestionInLastCategory =
    selectedCategory === categories[categories.length - 1] &&
    currentQuestionIndex === questions.length - 1;

  return (
    <div className="page-container">
      <div className="header-container">
        <div className="button-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'highlighted' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={`question-container ${selectedCategory === 'home' ? 'home-layout' : 'transport-layout'}`}>
        <div className="question">
          <Question
            question={currentQuestion.question}
            unit={currentQuestion.unit}
            value={answers[selectedCategory][currentQuestionIndex] || ''}
            onChange={handleChange}
          />
          <button
            className="gotobutton"
            onClick={handleNext}
            disabled={!answers[selectedCategory][currentQuestionIndex] ||
              (typeof answers[selectedCategory][currentQuestionIndex] === 'string' &&
                answers[selectedCategory][currentQuestionIndex].trim() === '')}
          >
            {isLastQuestionInLastCategory ? 'Submit' : 'Next'}
          </button>
        </div>
        {selectedCategory === 'home' && (
          <div className="home-calculator">
            <HomeCalculator answers={answers} />
          </div>
        )}
        {selectedCategory === 'transport' && (
          <div className="transport-calculator">
            <TransportCalculator answers={answers} />
          </div>
        )}
        {selectedCategory === 'lifestyle' && (
          <div className="lifestyle-calculator">
            <Lifestylecalculator answers={answers} />
          </div>)}
      </div>
    </div>
  );
};

export default QuestionForm;













































{/*}
import React, { useState, useEffect, useRef } from 'react';
import Question from './Question';
import '../calculate.css';
import Leftcorner from '../images/leftcorner.gif';
import { emissionFactors, calculateCarbonFootprint } from './Footprintcalculator';
import HomeCalculator from './Homecalculator';

const QuestionForm = () => {
  const homeQuestions = [
    { question: 'How much electricity do you use in your home?', unit: 'kWh', emissionFactorKey: 'electricity' },
    { question: 'What percentage is purchased from a clean energy program?', unit: '%', emissionFactorKey: '' },
    { question: 'What is your natural gas consumption?', unit: 'therms', emissionFactorKey: 'naturalGas' },
    { question: 'How much heating oil and other fuels do you use?', unit: 'gallons', emissionFactorKey: 'heatingOil' },
    { question: 'How many square feet is your living space?', unit: 'sq ft', emissionFactorKey: '' },
    { question: 'How much water do you use annually?', unit: 'gallons', emissionFactorKey: '' },
    { question: 'Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', unit: 'times', emissionFactorKey: '' }
  ];

  const transportQuestions = [
    { question: 'How many miles do you typically travel by car each year?', unit: 'miles', emissionFactorKey: 'car' },
    { question: 'What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', unit: 'mpg', emissionFactorKey: '' },
    { question: 'How many miles do you travel by public transportation annually?', unit: 'miles', emissionFactorKey: 'publicTransport' },
    { question: 'How many flights do you take each year, and what is the average distance per flight?', unit: 'miles', emissionFactorKey: 'flight' },
    { question: 'How many miles do you travel by train or other forms of mass transit per year?', unit: 'miles', emissionFactorKey: 'train' },
    { question: 'Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', unit: 'miles', emissionFactorKey: 'ridesharing' },
    { question: 'How often do you walk or bike for transportation, and what is the average distance covered per trip?', unit: 'miles', emissionFactorKey: 'walkingBiking' },
    { question: 'Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', unit: 'miles', emissionFactorKey: 'electricVehicle' },
    { question: 'Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', unit: 'miles', emissionFactorKey: 'otherTransport' },
    { question: 'How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', unit: 'miles', emissionFactorKey: 'car' }
  ];

  const lifestyleQuestions = [
    { question: 'How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', unit: 'times/week', emissionFactorKey: 'applianceUsage' },
    { question: 'What types of lighting fixtures do you have in your home, and how often are they used?', unit: 'hours/day', emissionFactorKey: 'lighting' },
    { question: 'How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', unit: 'hours/day', emissionFactorKey: 'electronicDevices' },
    { question: 'Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', unit: '', emissionFactorKey: '' },
    { question: 'How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', unit: 'times/week', emissionFactorKey: 'cooking' },
    { question: 'Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', unit: 'hours/week', emissionFactorKey: 'hobbies' }
  ];

  const categories = ['home', 'transport', 'lifestyle'];

  const [selectedCategory, setSelectedCategory] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ home: [], transport: [], lifestyle: [] });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex, selectedCategory, answers]);

  const getQuestions = (category) => {
    switch (category) {
      case 'home':
        return homeQuestions;
      case 'transport':
        return transportQuestions;
      case 'lifestyle':
        return lifestyleQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(selectedCategory);

  const handleNext = () => {
    const currentAnswer = answers[selectedCategory][currentQuestionIndex];
    if (!currentAnswer || (typeof currentAnswer === 'string' && currentAnswer.trim() === '')) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.indexOf(selectedCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setSelectedCategory(categories[currentCategoryIndex + 1]);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handleChange = (value) => {
    const newAnswers = { ...answers };
    newAnswers[selectedCategory][currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="page-container">
      <div className="header-container">
        <div className="button-container">
          <button
            className={`category-button ${selectedCategory === 'home' ? 'highlighted' : ''}`}
            onClick={() => handleCategoryChange('home')}
          >
            Home
          </button>
          <button
            className={`category-button ${selectedCategory === 'transport' ? 'highlighted' : ''}`}
            onClick={() => handleCategoryChange('transport')}
          >
            Transport
          </button>
          <button
            className={`category-button ${selectedCategory === 'lifestyle' ? 'highlighted' : ''}`}
            onClick={() => handleCategoryChange('lifestyle')}
          >
            Lifestyle
          </button>
        </div>
      </div>

      <div className={`question-container ${selectedCategory === 'home' ? 'home-layout' : ''}`}>
        <div className="question">
          <Question
            question={currentQuestion.question}
            unit={currentQuestion.unit}
            value={answers[selectedCategory][currentQuestionIndex] || ''}
            onChange={handleChange}
          />
          <button
            className="gotobutton"
            onClick={handleNext}
            disabled={!answers[selectedCategory][currentQuestionIndex] ||
              (typeof answers[selectedCategory][currentQuestionIndex] === 'string' &&
                answers[selectedCategory][currentQuestionIndex].trim() === '')}
          >
            Next
          </button>
        </div>
        {selectedCategory === 'home' && (
          <div className="home-calculator">
            <HomeCalculator answers={answers} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;



{/*import React, { useState, useEffect } from 'react';
import Question from './Question';
import '../calculate.css';
import Leftcorner from '../images/leftcorner.gif';
import { emissionFactors, calculateCarbonFootprint } from './Footprintcalculator';
import HomeCalculator from './Homecalculator';

const QuestionForm = () => {
  const homeQuestions = [
    { question: 'How much electricity do you use in your home?', unit: 'kWh', emissionFactorKey: 'electricity' },
    { question: 'What percentage is purchased from a clean energy program?', unit: '%', emissionFactorKey: '' },
    { question: 'What is your natural gas consumption?', unit: 'therms', emissionFactorKey: 'naturalGas' },
    { question: 'How much heating oil and other fuels do you use?', unit: 'gallons', emissionFactorKey: 'heatingOil' },
    { question: 'How many square feet is your living space?', unit: 'sq ft', emissionFactorKey: '' },
    { question: 'How much water do you use annually?', unit: 'gallons', emissionFactorKey: '' },
    { question: 'Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', unit: 'times', emissionFactorKey: '' },
  ];

  const transportQuestions = [
    { question: 'How many miles do you typically travel by car each year?', unit: 'miles', emissionFactorKey: 'car' },
    { question: 'What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', unit: 'mpg', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'How many miles do you travel by public transportation annually?', unit: 'miles', emissionFactorKey: 'publicTransport' },
    { question: 'How many flights do you take each year, and what is the average distance per flight?', unit: 'miles', emissionFactorKey: 'flight' },
    { question: 'How many miles do you travel by train or other forms of mass transit per year?', unit: 'miles', emissionFactorKey: 'train' },
    { question: 'Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', unit: 'miles', emissionFactorKey: 'ridesharing' },
    { question: 'How often do you walk or bike for transportation, and what is the average distance covered per trip?', unit: 'miles', emissionFactorKey: 'walkingBiking' },
    { question: 'Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', unit: 'miles', emissionFactorKey: 'electricVehicle' },
    { question: 'Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', unit: 'miles', emissionFactorKey: 'otherTransport' },
    { question: 'How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', unit: 'miles', emissionFactorKey: 'car' }
    ];

  const lifestyleQuestions = [
    { question: 'How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', unit: 'times/week', emissionFactorKey: 'applianceUsage' },
    { question: 'What types of lighting fixtures do you have in your home, and how often are they used?', unit: 'hours/day', emissionFactorKey: 'lighting' },
    { question: 'How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', unit: 'hours/day', emissionFactorKey: 'electronicDevices' },
    { question: 'Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', unit: '', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', unit: 'times/week', emissionFactorKey: 'cooking' },
    { question: 'Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', unit: 'hours/week', emissionFactorKey: 'hobbies' },  ];

  const categories = ['home', 'transport', 'lifestyle'];

  const [selectedCategory, setSelectedCategory] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ home: [], transport: [], lifestyle: [] });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex, selectedCategory, answers]);

  const getQuestions = (category) => {
    switch (category) {
      case 'home':
        return homeQuestions;
      case 'transport':
        return transportQuestions;
      case 'lifestyle':
        return lifestyleQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(selectedCategory);

  const handleNext = () => {
    const currentAnswer = answers[selectedCategory][currentQuestionIndex];
    if (!currentAnswer || (typeof currentAnswer === 'string' && currentAnswer.trim() === '')) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.indexOf(selectedCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setSelectedCategory(categories[currentCategoryIndex + 1]);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handleChange = (value) => {
    const newAnswers = { ...answers };
    newAnswers[selectedCategory][currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="page-container">
      <div className="header-container">
        <div className="button-container">
          <button 
            className={`category-button ${selectedCategory === 'home' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('home')}
          >
            Home
          </button>
          <button 
            className={`category-button ${selectedCategory === 'transport' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('transport')}
          >
            Transport
          </button>
          <button 
            className={`category-button ${selectedCategory === 'lifestyle' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('lifestyle')}
          >
            Lifestyle
          </button>
        </div>
      </div>

      <div className="question-container">
        <div className="question">
          <Question
            question={currentQuestion.question}
            unit={currentQuestion.unit}
            value={answers[selectedCategory][currentQuestionIndex] || ''}
            onChange={handleChange}
          />
          <button 
            className="gotobutton" 
            onClick={handleNext} 
            disabled={!answers[selectedCategory][currentQuestionIndex] || 
                      (typeof answers[selectedCategory][currentQuestionIndex] === 'string' && 
                       answers[selectedCategory][currentQuestionIndex].trim() === '')}
          >
            Next
          </button>
        </div>
      </div>

      {selectedCategory === 'home' && <HomeCalculator answers={answers} />}
    </div>
  );
};

export default QuestionForm;


{/*import React, { useState, useEffect } from 'react';
import Question from './Question';
import '../calculate.css';
import Leftcorner from '../images/leftcorner.gif';
import { emissionFactors, calculateCarbonFootprint } from './Footprintcalculator';

const QuestionForm = () => {
  const homeQuestions = [
    { question: 'How much electricity do you use in your home?', unit: 'kWh', emissionFactorKey: 'electricity' },
    { question: 'What percentage is purchased from a clean energy program?', unit: '%', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'What is your natural gas consumption?', unit: 'therms', emissionFactorKey: 'naturalGas' },
    { question: 'How much heating oil and other fuels do you use?', unit: 'gallons', emissionFactorKey: 'heatingOil' },
    { question: 'How many square feet is your living space?', unit: 'sq ft', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'How much water do you use annually?', unit: 'gallons', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', unit: 'times', emissionFactorKey: '' }, // Assuming no emissions
  ];

  const transportQuestions = [
    { question: 'How many miles do you typically travel by car each year?', unit: 'miles', emissionFactorKey: 'car' },
    { question: 'What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', unit: 'mpg', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'How many miles do you travel by public transportation annually?', unit: 'miles', emissionFactorKey: 'publicTransport' },
    { question: 'How many flights do you take each year, and what is the average distance per flight?', unit: 'miles', emissionFactorKey: 'flight' },
    { question: 'How many miles do you travel by train or other forms of mass transit per year?', unit: 'miles', emissionFactorKey: 'train' },
    { question: 'Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', unit: 'miles', emissionFactorKey: 'ridesharing' },
    { question: 'How often do you walk or bike for transportation, and what is the average distance covered per trip?', unit: 'miles', emissionFactorKey: 'walkingBiking' },
    { question: 'Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', unit: 'miles', emissionFactorKey: 'electricVehicle' },
    { question: 'Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', unit: 'miles', emissionFactorKey: 'otherTransport' },
    { question: 'How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', unit: 'miles', emissionFactorKey: 'car' },
  ];

  const lifestyleQuestions = [
    { question: 'How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', unit: 'times/week', emissionFactorKey: 'applianceUsage' },
    { question: 'What types of lighting fixtures do you have in your home, and how often are they used?', unit: 'hours/day', emissionFactorKey: 'lighting' },
    { question: 'How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', unit: 'hours/day', emissionFactorKey: 'electronicDevices' },
    { question: 'Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', unit: '', emissionFactorKey: '' }, // Assuming no emissions
    { question: 'How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', unit: 'times/week', emissionFactorKey: 'cooking' },
    { question: 'Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', unit: 'hours/week', emissionFactorKey: 'hobbies' },
  ];

  const categories = ['home', 'transport', 'lifestyle'];

  const [selectedCategory, setSelectedCategory] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ home: [], transport: [], lifestyle: [] });
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex, selectedCategory, answers]);

  const getQuestions = (category) => {
    switch (category) {
      case 'home':
        return homeQuestions;
      case 'transport':
        return transportQuestions;
      case 'lifestyle':
        return lifestyleQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(selectedCategory);

  const handleNext = () => {
    const currentAnswer = answers[selectedCategory][currentQuestionIndex];
    if (!currentAnswer || (typeof currentAnswer === 'string' && currentAnswer.trim() === '')) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentCategoryIndex = categories.indexOf(selectedCategory);
      if (currentCategoryIndex < categories.length - 1) {
        setSelectedCategory(categories[currentCategoryIndex + 1]);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handleChange = (value) => {
    const newAnswers = { ...answers };
    newAnswers[selectedCategory][currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  useEffect(() => {
    const totalEmissions = calculateCarbonFootprint(answers, getQuestions);
    setCarbonFootprint(totalEmissions);
  }, [answers]);

  return (
    <div className="page-container">
      <div className="header-container">
        <div className="button-container">
          <button 
            className={`category-button ${selectedCategory === 'home' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('home')}
          >
            Home
          </button>
          <button 
            className={`category-button ${selectedCategory === 'transport' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('transport')}
          >
            Transport
          </button>
          <button 
            className={`category-button ${selectedCategory === 'lifestyle' ? 'highlighted' : ''}`} 
            onClick={() => handleCategoryChange('lifestyle')}
          >
            Lifestyle
          </button>
        </div>
      </div>

      <div className="question-container">
        <div className="question">
          <Question
            question={currentQuestion.question}
            unit={currentQuestion.unit}
            value={answers[selectedCategory][currentQuestionIndex] || ''}
            onChange={handleChange}
          />
          <button 
            className="gotobutton" 
            onClick={handleNext} 
            disabled={!answers[selectedCategory][currentQuestionIndex] || 
                      (typeof answers[selectedCategory][currentQuestionIndex] === 'string' && 
                       answers[selectedCategory][currentQuestionIndex].trim() === '')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;

*/}