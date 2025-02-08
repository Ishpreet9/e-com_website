import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'BEST SELLERS'
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
                label: 'LENOVO',
                data: [15, 16, 18, 17, 19, 21, 20, 22, 24, 23, 25, 28],  // More variability in Samsung's data
                fill: true,
                backgroundColor: 'rgba(255, 132, 0, 0.3)',  // Dark yellow (Hex code for a darker yellow)
                borderColor: 'rgba(255, 132, 0, 0.9)',
                borderWidth: 2,
                tension: 0.1,
            }
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart
