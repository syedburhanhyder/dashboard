import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Activity',
            data: [2, 2.2, 5, 4, 2.5, 3, 6, 5.5, 6, 9, 7, 4.7, 5, 4, 2, 1.5, 3.6, 4.6, 15, 6.6, 2.7, 1.1, 4.5, 3.3, 5, 7],
            backgroundColor: 'rgba(114, 149, 251, 1)',
            borderColor: 'rgba(114, 149, 251, 1)',
            borderWidth: 1,
            borderRadius: 15,
            borderSkipped: false,
            barThickness: 25,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleFont: {
                size: 16,
            },
            bodyFont: {
                size: 14,
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#fff',
            },
        },
        y: {
            grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                borderDash: [5, 5],
                lineWidth: 1,
            },
            ticks: {
                color: '#fff',
                stepSize: 5,
                callback: function (value) {
                    return value + 'K'; // Add 'K' after every step
                }
            },
            beginAtZero: true,
            min: 0,
            max: 15,
        },
    },
};
const BarChart = () => {
    return <article className="card text-white bg-dark mt-3">
        <div className="card-body d-flex flex-column justify-content-end">
        <div className='row'>
            <h5 className='h4 col-10'>Activity</h5>
            <form className='col-2'>
            <select className="form-select rounded-pill text-white form-select-sm border-secondary" style={{backgroundColor:'grey'}} aria-label="Default select example">
                <option defaultValue={'0'} value='0'>Weekly</option>
                <option value="1">Monthly</option>
                <option value="2">Yearly</option>
         
            </select>
            </form>
            </div>
            <div style={{ height: '13em' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    </article>
};
export default BarChart;
