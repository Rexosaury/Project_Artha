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
    <div className="p-8 space-y-10 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent mb-4 animate-gradient-shift">
          Financial Dashboard
        </h1>
        <p className="text-text-secondary text-xl font-semibold">Overview of your financial health and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="card-aurora p-8 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Net Worth</h3>
            <div className="w-14 h-14 bg-gradient-emerald rounded-2xl flex items-center justify-center shadow-glow-emerald animate-float">
              <span className="text-white text-2xl">💰</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-text-primary mb-3">₹6,80,000</p>
          <div className="flex items-center space-x-3">
            <span className="text-base font-bold text-emerald-600">+8% this year</span>
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-8 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Monthly SIP</h3>
            <div className="w-14 h-14 bg-gradient-royal rounded-2xl flex items-center justify-center shadow-glow animate-float">
              <span className="text-white text-2xl">📈</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-text-primary mb-3">₹25,000</p>
          <div className="flex items-center space-x-3">
            <span className="text-base font-bold text-royal-600">3 active funds</span>
            <div className="w-3 h-3 bg-royal-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-8 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Returns</h3>
            <div className="w-14 h-14 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-glow-sunset animate-float">
              <span className="text-white text-2xl">🎯</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-text-primary mb-3">₹55,000</p>
          <div className="flex items-center space-x-3">
            <span className="text-base font-bold text-sunset-600">+18.3% overall</span>
            <div className="w-3 h-3 bg-sunset-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-8 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Monthly Expenses</h3>
            <div className="w-14 h-14 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-glow-cyan animate-float">
              <span className="text-white text-2xl">💳</span>
            </div>
          </div>
          <p className="text-4xl font-bold text-text-primary mb-3">₹60,000</p>
          <div className="flex items-center space-x-3">
            <span className="text-base font-bold text-ocean-600">+5% vs last month</span>
            <div className="w-3 h-3 bg-ocean-500 rounded-full animate-pulse-glow"></div>
          </div>
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
