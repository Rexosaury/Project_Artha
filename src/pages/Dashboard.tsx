import React from 'react';
import Chart from '../components/Chart';
import AnomalyAlerts from '../components/AnomalyAlerts';
import GoalProgressCards from '../components/GoalProgressCards';
import IntegrationBadges from '../components/IntegrationBadges';
import { netWorthData, sipPerformanceData, expenseCategories, anomalyAlerts, goalProgress } from '../data/dummyData';
import { ChartData } from '../types';

const Dashboard: React.FC = () => {
  const netWorthChartData: ChartData = {
    type: 'line',
    title: 'Net Worth Growth Over Time',
    data: {
      labels: netWorthData.map(d => d.month),
      datasets: [{
        label: 'Net Worth (₹)',
        data: netWorthData.map(d => d.amount),
        borderColor: '#1A73E8',
        backgroundColor: 'rgba(26, 115, 232, 0.1)',
        tension: 0.4,
        fill: true
      }]
    }
  };

  const sipPerformanceChartData: ChartData = {
    type: 'bar',
    title: 'SIP Performance vs Benchmark',
    data: {
      labels: sipPerformanceData.map(d => d.fundName),
      datasets: [{
        label: 'Your Returns (%)',
        data: sipPerformanceData.map(d => d.returnPercentage),
        backgroundColor: sipPerformanceData.map(d => 
          d.returnPercentage >= d.benchmark ? '#34A853' : '#EA4335'
        ),
      }, {
        label: 'Benchmark (%)',
        data: sipPerformanceData.map(d => d.benchmark),
        backgroundColor: '#1A73E8',
      }]
    }
  };

  const expenseChartData: ChartData = {
    type: 'doughnut',
    title: 'Monthly Expense Breakdown',
    data: {
      labels: expenseCategories.map(d => d.category),
      datasets: [{
        data: expenseCategories.map(d => d.amount),
        backgroundColor: [
          '#1A73E8', '#34A853', '#FBBC04', '#EA4335', 
          '#9AA0A6', '#FF6D01', '#9C27B0'
        ],
      }]
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-google-gray mb-2">Financial Dashboard</h1>
        <p className="text-gray-600">Overview of your financial health and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Current Net Worth</h3>
          <p className="text-2xl font-bold text-google-gray">₹6,80,000</p>
          <p className="text-sm text-green-600">+8% this year</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Monthly SIP</h3>
          <p className="text-2xl font-bold text-google-gray">₹25,000</p>
          <p className="text-sm text-blue-600">3 active funds</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Total Returns</h3>
          <p className="text-2xl font-bold text-google-gray">₹55,000</p>
          <p className="text-sm text-green-600">+18.3% overall</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Monthly Expenses</h3>
          <p className="text-2xl font-bold text-google-gray">₹60,000</p>
          <p className="text-sm text-red-600">+5% vs last month</p>
        </div>
      </div>

      {/* Goal Progress Cards */}
      <GoalProgressCards goals={goalProgress} className="mb-6" />

      {/* Anomaly Alerts */}
      <AnomalyAlerts alerts={anomalyAlerts} className="mb-6" />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Chart chartData={netWorthChartData} />
        <Chart chartData={sipPerformanceChartData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Chart chartData={expenseChartData} />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">💡 AI Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="text-sm font-medium text-green-800">✅ Excellent SIP Discipline</p>
              <p className="text-sm text-green-700">You've never missed a payment. Keep it up!</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm font-medium text-blue-800">📈 Investment Opportunity</p>
              <p className="text-sm text-blue-700">Consider switching from Fund X to higher-performing alternatives.</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
              <p className="text-sm font-medium text-purple-800">🎯 Goal Achievement</p>
              <p className="text-sm text-purple-700">You're on track to achieve your home purchase goal 6 months early!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Status */}
      <IntegrationBadges className="mb-6" />
    </div>
  );
};

export default Dashboard;
