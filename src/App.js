// import logo from './logo.svg';
import './App.css';
import PieChart from './Components/PieChart';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { calculateWaste } from './utils/wasteCalculator'; // Import the function
import React from 'react';


function App() {
  const [inputValues, setInputValues] = useState({
    glass: 0,
    metals: 0,
    plastics: 0,
    otherOrganics: 0,
    foodScraps: 0,
    paperCardboard: 0,
    other: 0,
    textiles: 0,
    yardTrimmings: 0,
    wood: 0,
  });

  const [result, setResult] = useState(null);

  
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: parseFloat(e.target.value) || 0, // Ensure input is treated as a number
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wasteResult = calculateWaste(inputValues);
    setResult(wasteResult);
    
  };
  

  return (
    <div className="content">
      <header>
      </header>
      <h1>Waste Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="glass" onChange={handleChange} placeholder="Glass Waste" />
        <input type="number" name="metals" onChange={handleChange} placeholder="Metal Waste" />
        <input type="number" name="plastics" onChange={handleChange} placeholder="Plastic Waste" />
        <input type="number" name="otherOrganics" onChange={handleChange} placeholder="Other Organic Waste" />
        <input type="number" name="foodScraps" onChange={handleChange} placeholder="Food Scrap Waste" />
        <input type="number" name="paperCardboard" onChange={handleChange} placeholder="Paper/Cardboard Waste" />
        <input type="number" name="other" onChange={handleChange} placeholder="Other Waste" />
        <input type="number" name="textiles" onChange={handleChange} placeholder="Textiles Waste" />
        <input type="number" name="yardTrimmings" onChange={handleChange} placeholder="Yard Trimmings Waste" />
        <input type="number" name="wood" onChange={handleChange} placeholder="Wood Waste" />
        <button type="submit">Calculate Waste</button>
      </form>
      {result && (
        <>
        <div>
          <h2>Total Waste: {result.totalWaste}</h2>
          <h3>Proportions:</h3>
          <ul>
            {Object.entries(result.proportions).map(([key, value]) => (
              <li key={key}>
                {key}: {value.toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
        <h1>Pie Chart Example</h1>
      <PieChart 
      labels={Object.keys(result.proportions)} // Use the waste types as labels
      dataValues={Object.values(result.proportions)} // Use the calculated proportions as data
      
      />
    </>    
      )}
      
    
    </div>

      
    );
}



export default App;
