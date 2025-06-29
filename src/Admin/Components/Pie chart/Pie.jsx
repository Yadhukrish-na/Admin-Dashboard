import React from 'react';
import './Pie.css';
import { Pie as PieChart } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pies() {

  const dataValues = {
    users: 100,
    orders: 100,
    earnings: 100,
    balance: 100,
  };

  const pieData = {
    labels: ['Users', 'Orders', 'Earnings', 'Balance'],
    datasets: [
      {
        data: [dataValues.users, dataValues.orders, dataValues.earnings, dataValues.balance],
        backgroundColor: [
          'rgba(220, 20, 60, 0.6)', 
          'rgba(218, 165, 32, 0.6)', 
          'rgba(0, 128, 0, 0.6)', 
          'rgba(128, 0, 128, 0.6)', 
        ],
        borderColor: [
          'crimson',
          'goldenrod',
          'green',
          'purple',
        ],
        borderWidth: 2,
        hoverOffset: 20, 
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: "'Arial', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="pie-container">
      <h3>Dashboard Metrics Distribution</h3>
      <div className="pie-chart">
        <PieChart data={pieData} options={pieOptions} />
      </div>
    </div>
  );
}

export default Pies;