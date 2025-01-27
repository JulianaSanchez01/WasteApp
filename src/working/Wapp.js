// import logo from './logo.svg';
/*import './App.css';
import { useState } from 'react';
import { calculateWaste } from './utils/wasteCalculator'; // Import the function

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
      )}

      
    </div>
  );
}

export default App;
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["label 1", "label 2", "label 3"],
        datasets: [
            {
                data: [300, 50, 200],
                backgroundColor: [
                    'rgb(255, 99, 123)',
                    'rgb(54, 162, 235)',
                    'rgb(20, 250, 50)',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // To allow for custom sizing
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;

*/