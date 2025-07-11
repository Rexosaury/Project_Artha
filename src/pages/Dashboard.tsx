import React from 'react';
import Chart from '../components/Chart';
import IntegrationBadges from '../components/IntegrationBadges';
import { netWorthData, sipPerformanceData, expenseCategories } from '../data/dummyData';
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
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 animate-fade-in">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent mb-2 sm:mb-3 animate-gradient-shift leading-tight">
          Financial Dashboard
        </h1>
        <p className="text-text-secondary text-sm sm:text-base font-medium">Overview of your financial health and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="card-aurora p-5 sm:p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up touch-manipulation">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xs sm:text-sm font-bold text-text-secondary uppercase tracking-wider">Net Worth</h3>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-emerald rounded-2xl flex items-center justify-center shadow-glow-emerald animate-float">
              <span className="text-white text-xl sm:text-2xl">💰</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">₹6,80,000</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base font-bold text-emerald-600">+8% this year</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-5 sm:p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up touch-manipulation" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xs sm:text-sm font-bold text-text-secondary uppercase tracking-wider">Monthly SIP</h3>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-royal rounded-2xl flex items-center justify-center shadow-glow animate-float">
              <span className="text-white text-xl sm:text-2xl">📈</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">₹25,000</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base font-bold text-royal-600">3 active funds</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-royal-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-5 sm:p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up touch-manipulation" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xs sm:text-sm font-bold text-text-secondary uppercase tracking-wider">Total Returns</h3>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-glow-sunset animate-float">
              <span className="text-white text-xl sm:text-2xl">🎯</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">₹55,000</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base font-bold text-sunset-600">+18.3% overall</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-sunset-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        <div className="card-aurora p-5 sm:p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 group animate-slide-up touch-manipulation" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xs sm:text-sm font-bold text-text-secondary uppercase tracking-wider">Monthly Expenses</h3>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-glow-cyan animate-float">
              <span className="text-white text-xl sm:text-2xl">💳</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">₹60,000</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base font-bold text-ocean-600">+5% vs last month</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-ocean-500 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Goal Progress Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Financial Goals Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="card-premium p-5 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary">Emergency Fund</h3>
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-secondary">₹2,50,000 / ₹5,00,000</span>
                <span className="font-bold text-royal-600">50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-royal h-3 rounded-full transition-all duration-500 animate-pulse-glow" style={{width: '50%'}}></div>
              </div>
            </div>
            <p className="text-xs text-text-secondary">₹10K monthly target</p>
          </div>

          <div className="card-premium p-5 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary">Home Down Payment</h3>
              <span className="text-2xl">🏠</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-secondary">₹8,50,000 / ₹15,00,000</span>
                <span className="font-bold text-emerald-600">57%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-emerald h-3 rounded-full transition-all duration-500 animate-pulse-glow" style={{width: '57%'}}></div>
              </div>
            </div>
            <p className="text-xs text-text-secondary">₹25K monthly target</p>
          </div>

          <div className="card-premium p-5 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary">Vacation Fund</h3>
              <span className="text-2xl">✈️</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-secondary">₹75,000 / ₹2,00,000</span>
                <span className="font-bold text-sunset-600">38%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-sunset h-3 rounded-full transition-all duration-500 animate-pulse-glow" style={{width: '38%'}}></div>
              </div>
            </div>
            <p className="text-xs text-text-secondary">₹8K monthly target</p>
          </div>
        </div>
      </div>

      {/* Enhanced Recent Alerts & Anomaly Detection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="card-premium p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4 flex items-center space-x-2">
            <span>🚨</span>
            <span>Recent Alerts</span>
          </h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-red-800 text-sm sm:text-base">Overspent in June</h3>
                  <p className="text-xs sm:text-sm text-red-600">₹12,000 above budget</p>
                </div>
                <div className="text-xl sm:text-2xl">📊</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-yellow-50 rounded-xl border border-yellow-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-yellow-800 text-sm sm:text-base">SIP Due Tomorrow</h3>
                  <p className="text-xs sm:text-sm text-yellow-600">₹25,000 auto-debit scheduled</p>
                </div>
                <div className="text-xl sm:text-2xl">💰</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-800 text-sm sm:text-base">Goal Achievement</h3>
                  <p className="text-xs sm:text-sm text-blue-600">Emergency fund 50% complete!</p>
                </div>
                <div className="text-xl sm:text-2xl">🎯</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-premium p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4 flex items-center space-x-2">
            <span>📈</span>
            <span>Spending Anomalies</span>
          </h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-red-800 text-sm sm:text-base">Food & Dining</h3>
                  <p className="text-xs sm:text-sm text-red-600">₹3,000 more than last month</p>
                </div>
                <div className="text-xl sm:text-2xl">🍽️</div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                </div>
                <span className="text-xs text-red-600 font-bold">+25%</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-yellow-50 rounded-xl border border-yellow-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-yellow-800 text-sm sm:text-base">Shopping</h3>
                  <p className="text-xs sm:text-sm text-yellow-600">₹2,200 above average</p>
                </div>
                <div className="text-xl sm:text-2xl">🛍️</div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full transition-all duration-500" style={{width: '60%'}}></div>
                </div>
                <span className="text-xs text-yellow-600 font-bold">+18%</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-emerald-50 rounded-xl border border-emerald-200 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-emerald-800 text-sm sm:text-base">Transportation</h3>
                  <p className="text-xs sm:text-sm text-emerald-600">₹1,500 less than usual</p>
                </div>
                <div className="text-xl sm:text-2xl">🚗</div>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{width: '40%'}}></div>
                </div>
                <span className="text-xs text-emerald-600 font-bold">-12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
