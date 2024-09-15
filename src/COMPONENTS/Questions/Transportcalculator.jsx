import React from 'react';
import Chart from 'chart.js/auto';

const calculateCarCarbon = (miles, efficiency) => {
  const poundsPerGallon = 19.6;
  const gallons = miles / efficiency;
  return gallons * poundsPerGallon;
};

const calculatePublicTransportCarbon = (miles) => {
  const emissionsPerMile = 0.3;
  return miles * emissionsPerMile;
};

const calculateFlightsCarbon = (numFlights, distance) => {
  const emissionsPerMile = 0.2;
  return numFlights * distance * emissionsPerMile;
};

const calculateTrainCarbon = (miles) => {
  const emissionsPerMile = 0.1;
  return miles * emissionsPerMile;
};

const generateChart = (ctx, data) => {
  if (window.myChart instanceof Chart) {
    window.myChart.destroy();
  }
  
  window.myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Car', 'Public Transport', 'Flights', 'Train/Mass Transit'],
      datasets: [{
        label: 'Carbon Footprint by Transportation Mode',
        data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
    }
  });
};

const TransportCalculator = ({ answers }) => {
  const carMiles = parseFloat(answers.transport[0]) || 0;
  const fuelEfficiency = parseFloat(answers.transport[1]) || 0;
  const publicTransportMiles = parseFloat(answers.transport[2]) || 0;
  const numFlights = parseInt(answers.transport[3]) || 0;
  const averageFlightDistance = parseFloat(answers.transport[4]) || 0;
  const trainMiles = parseFloat(answers.transport[5]) || 0;

  const carCarbon = calculateCarCarbon(carMiles, fuelEfficiency);
  const publicTransportCarbon = calculatePublicTransportCarbon(publicTransportMiles);
  const flightsCarbon = calculateFlightsCarbon(numFlights, averageFlightDistance);
  const trainCarbon = calculateTrainCarbon(trainMiles);

  const totalEmissions = carCarbon + publicTransportCarbon + flightsCarbon + trainCarbon;

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      generateChart(canvasRef.current.getContext('2d'), [carCarbon, publicTransportCarbon, flightsCarbon, trainCarbon]);
    }
  }, [carCarbon, publicTransportCarbon, flightsCarbon, trainCarbon]);

  return (
    <div className='transport-calculator-container'>
      <h2 className='breakdownhead'>Transportation Carbon<br/>Footprint Report</h2>
      <canvas ref={canvasRef}></canvas>
      <p>Your estimated carbon footprint is {totalEmissions.toFixed(2)} lb CO2e per year.</p>
    </div>
  );
};

export default TransportCalculator;
