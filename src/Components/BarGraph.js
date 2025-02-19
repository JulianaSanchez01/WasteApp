import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ dataValues, labels }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Recycling Rates', // Title of the data series
                data: dataValues, // Values for the bars
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for the bars
                borderWidth: 1, // Border width
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // To allow for custom sizing
        scales: {
            x: {
                beginAtZero: true, // Start the x-axis at 0
            },
            y: {
                beginAtZero: true, // Start the y-axis at 0
            },
        },
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;