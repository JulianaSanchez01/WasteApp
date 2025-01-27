import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dataValues, labels }) => {
    const data = {
        labels: labels, // Accept labels as props
        datasets: [
            {
                data: dataValues, // Accept dataValues as props
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
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
