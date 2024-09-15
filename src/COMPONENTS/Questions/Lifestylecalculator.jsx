import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const Lifestylecalculator = ({ answers }) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    console.log('Answers:', answers); // Debugging statement

    const calculateCarbonFootprint = () => {
      const appliancesUsage = parseFloat(answers.lifestyle?.[0]) || 0;
      const lightingType = parseFloat(answers.lifestyle?.[1]) || 0;
      const electronicDevicesUsage = parseFloat(answers.lifestyle?.[2]) || 0;
      const energyEfficientProducts = parseFloat(answers.lifestyle?.[3]) || 0;
      const cookingFrequency = parseFloat(answers.lifestyle?.[4]) || 0;
      const intensiveActivities = parseFloat(answers.lifestyle?.[5]) || 0;

      // Calculate total carbon footprint based on input data
      const totalCarbonFootprint = appliancesUsage + lightingType + electronicDevicesUsage + energyEfficientProducts + cookingFrequency + intensiveActivities;

      return { appliancesUsage, lightingType, electronicDevicesUsage, energyEfficientProducts, cookingFrequency, intensiveActivities, totalCarbonFootprint };
    };

    const generateChart = (data) => {
      if (myChartRef.current) {
        myChartRef.current.destroy(); // Destroy the previous chart if it exists
      }

      const ctx = chartRef.current.getContext('2d');
      myChartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Appliances Usage', 'Lighting Type', 'Electronic Devices Usage', 'Energy Efficient Products', 'Cooking Frequency', 'Intensive Activities'],
          datasets: [{
            label: 'Carbon Footprint by Lifestyle',
            data: [
              data.appliancesUsage,
              data.lightingType,
              data.electronicDevicesUsage,
              data.energyEfficientProducts,
              data.cookingFrequency,
              data.intensiveActivities
            ],
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

    if (answers && answers.lifestyle) {
      const data = calculateCarbonFootprint();
      console.log('Chart Data:', data); 
      generateChart(data);
    }

    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [answers]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Lifestylecalculator;
