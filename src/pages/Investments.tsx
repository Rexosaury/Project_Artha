import React from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const Investments: React.FC = () => {
  const portfolioData = [
    { name: 'HDFC Top 100 Fund', amount: 125000, returns: 18.5, allocation: 35 },
    { name: 'SBI Small Cap Fund', amount: 85000, returns: 22.3, allocation: 25 },
    { name: 'ICICI Prudential Bluechip', amount: 95000, returns: 15.8, allocation: 28 },
    { name: 'Axis Long Term Equity', amount: 45000, returns: 12.4, allocation: 12 },
  ];

  const totalValue = portfolioData.reduce((sum, item) => sum + item.amount, 0);
  const avgReturns = portfolioData.reduce((sum, item) => sum + (item.returns * item.allocation / 100), 0);

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Investment Portfolio
        </h1>
        <p className="text-text-secondary text-lg font-medium">Track and manage your investment portfolio</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Value</h3>
            <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center shadow-glow-emerald">
              <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">₹{(totalValue / 100000).toFixed(1)}L</p>
          <div className="flex items-center space-x-2">
            <ArrowUpIcon className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-600">+12.5% this month</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Average Returns</h3>
            <div className="w-12 h-12 bg-gradient-royal rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">%</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">{avgReturns.toFixed(1)}%</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-royal-600">Annual returns</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Active Funds</h3>
            <div className="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center shadow-glow-sunset">
              <span className="text-white font-bold text-lg">{portfolioData.length}</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">{portfolioData.length}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-sunset-600">Diversified portfolio</span>
          </div>
        </div>
      </div>

      {/* Holdings */}
      <div className="card-premium p-6">
        <h2 className="text-xl font-bold text-text-primary mb-6">Current Holdings</h2>
        <div className="space-y-4">
          {portfolioData.map((fund, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary">{fund.name}</h3>
                <p className="text-sm text-text-secondary">₹{fund.amount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <div className={`flex items-center space-x-1 ${fund.returns > 15 ? 'text-emerald-600' : 'text-sunset-600'}`}>
                  {fund.returns > 15 ? (
                    <ArrowTrendingUpIcon className="w-4 h-4" />
                  ) : (
                    <ArrowTrendingDownIcon className="w-4 h-4" />
                  )}
                  <span className="font-bold">{fund.returns}%</span>
                </div>
                <p className="text-sm text-text-secondary">{fund.allocation}% allocation</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="btn-primary w-full">Start New SIP</button>
            <button className="btn-secondary w-full">Rebalance Portfolio</button>
            <button className="btn-secondary w-full">View Detailed Analysis</button>
          </div>
        </div>

        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="p-3 bg-emerald-50 rounded-lg">
              <p className="text-sm font-medium text-emerald-800">Consider increasing allocation to small cap funds</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Your portfolio is well diversified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
