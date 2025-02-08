import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'COMPETETORS'
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#2d3748',
                },
            },
            y: {
                grid: {
                    color: '#2d3748',
                },
            },
        },
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Samsung',
                data: [15, 16, 18, 17, 19, 21, 20, 22, 24, 23, 25, 28],  // More variability in Samsung's data
                fill: false,
                borderColor: 'rgba(255, 255, 0, 0.75)',
                tension: 0.1,
            },
            {
                label: 'Apple',
                data: [12, 14, 13, 15, 16, 12, 18, 14, 16, 20, 18, 21],  // More fluctuation in Apple’s data
                fill: false,
                borderColor: 'rgba(25, 198, 255, 0.8)',
                tension: 0.1,
            },
        ],
    };
    return (
        <Line options={options} data={data} />
    )
}

export default LineChart
