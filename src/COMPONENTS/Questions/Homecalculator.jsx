import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const HomeCalculator = ({ answers }) => {
  const [totalEmissions, setTotalEmissions] = useState(0);

  const calculateCarbonFootprint = () => {
    const electricityUsage = parseFloat(answers.home[0]) || 0;
    const cleanEnergyPercentage = (parseFloat(answers.home[1]) || 0) / 100;
    const naturalGasConsumption = parseFloat(answers.home[2]) || 0;
    const heatingOilConsumption = parseFloat(answers.home[3]) || 0;
    const otherFuelsConsumption = parseFloat(answers.home[4]) || 0;
    const livingSpaceSize = parseFloat(answers.home[5]) || 0;
    const waterMultiplier = parseFloat(answers.home[6]) || 0;

    const averageWaterUsage = 69100; // gallons per person per year (US average)
    const electricityConversion = 0.63; // lb CO2e/kWh (US average grid mix)
    const cleanElectricityConversion = 0; // lb CO2e/kWh for clean energy
    const naturalGasConversion = 11.7; // lb CO2e/therm
    const heatingOilConversion = 22.37; // lb CO2e/gallon
    const otherFuelsConversion = 19.64; // lb CO2e/gallon
    const waterConversion = 0.003; // lb CO2e/gallon for water

    // Calculate emissions
    const electricityEmissions = electricityUsage * (electricityConversion * (1 - cleanEnergyPercentage) + cleanElectricityConversion * cleanEnergyPercentage);
    const naturalGasEmissions = naturalGasConsumption * naturalGasConversion;
    const heatingOilEmissions = heatingOilConsumption * heatingOilConversion;
    const otherFuelsEmissions = otherFuelsConsumption * otherFuelsConversion;
    const waterEmissions = waterMultiplier * averageWaterUsage * waterConversion;

    const totalEmissions = electricityEmissions + naturalGasEmissions + heatingOilEmissions + otherFuelsEmissions + waterEmissions;

    return {
      electricity: electricityEmissions,
      naturalGas: naturalGasEmissions,
      heatingOil: heatingOilEmissions,
      otherFuels: otherFuelsEmissions,
      water: waterEmissions,
      total: totalEmissions,
    };
  };

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const carbonFootprint = calculateCarbonFootprint();
    setTotalEmissions(carbonFootprint.total);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Electricity', 'Natural Gas', 'Heating Oil', 'Other Fuels', 'Water'],
          datasets: [
            {
              data: [
                carbonFootprint.electricity,
                carbonFootprint.naturalGas,
                carbonFootprint.heatingOil,
                carbonFootprint.otherFuels,
                carbonFootprint.water,
              ],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [answers]);

  return (
    <div className="home-calculator-container">
      <h3 className='breakdownhead'>Carbon Footprint Breakdown</h3>
      <canvas ref={chartRef}></canvas>
      <p>Your estimated carbon footprint is {totalEmissions.toFixed(2)} lb CO2e per year.</p>
    </div>
  );
};

export default HomeCalculator;
