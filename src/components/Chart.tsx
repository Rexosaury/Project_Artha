import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { ChartData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ChartProps {
  chartData: ChartData;
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ chartData, className = '' }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: chartData.title,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    scales: chartData.type === 'pie' || chartData.type === 'doughnut' ? undefined : {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options = { ...defaultOptions, ...chartData.options };

  const renderChart = () => {
    switch (chartData.type) {
      case 'line':
        return <Line data={chartData.data} options={options} />;
      case 'bar':
        return <Bar data={chartData.data} options={options} />;
      case 'pie':
        return <Pie data={chartData.data} options={options} />;
      case 'doughnut':
        return <Doughnut data={chartData.data} options={options} />;
      default:
        return <div>Unsupported chart type</div>;
    }
  };

  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      <div className="h-64">
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;
