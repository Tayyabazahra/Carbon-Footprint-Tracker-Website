
export const emissionFactors = {
    electricity: 0.5, // kg CO2 per kWh
    naturalGas: 11.7, // kg CO2 per therm
    heatingOil: 22.4, // kg CO2 per gallon
    car: 2.3, // kg CO2 per mile
    publicTransport: 0.1, // kg CO2 per mile
    flight: 0.2, // kg CO2 per mile
    train: 0.05, // kg CO2 per mile
    ridesharing: 0.3, // kg CO2 per mile
    walkingBiking: 0, // Assuming negligible carbon emissions
    electricVehicle: 0.1, // kg CO2 per mile (assuming it's charged with renewable energy)
    otherTransport: 0.5, // kg CO2 per mile
    applianceUsage: 0.2, // kg CO2 per hour
    lighting: 0.1, // kg CO2 per hour
    electronicDevices: 0.3, // kg CO2 per hour
    cooking: 0.4, // kg CO2 per hour
    hobbies: 0.5, // kg CO2 per hour
  };
  
  export const calculateCarbonFootprint = (answers, getQuestions) => {
    let totalEmissions = 0;
  
    const categories = ['home', 'transport', 'lifestyle'];
  
    for (const category of categories) {
      const questions = getQuestions(category);
  
      for (let i = 0; i < answers[category].length; i++) {
        const answer = answers[category][i];
        if (answer !== undefined && answer !== '') {
          const question = questions[i];
          const emissionFactorKey = question.emissionFactorKey;
          const emissionFactor = emissionFactors[emissionFactorKey];
          const emission = parseFloat(answer) * emissionFactor;
          totalEmissions += emission;
        }
      }
    }
  
    return totalEmissions;
  };
  