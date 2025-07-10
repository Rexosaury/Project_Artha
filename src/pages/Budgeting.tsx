import React, { useState } from 'react';
import { WalletIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

const Budgeting: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('January 2024');

  const budgetCategories = [
    { name: 'Food & Dining', budgeted: 15000, spent: 12500, color: 'emerald' },
    { name: 'Transportation', budgeted: 8000, spent: 9200, color: 'rose' },
    { name: 'Shopping', budgeted: 10000, spent: 15000, color: 'rose' },
    { name: 'Entertainment', budgeted: 5000, spent: 3800, color: 'emerald' },
    { name: 'Bills & Utilities', budgeted: 12000, spent: 11800, color: 'emerald' },
    { name: 'Healthcare', budgeted: 3000, spent: 2100, color: 'emerald' },
  ];

  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const remaining = totalBudgeted - totalSpent;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Budget Tracker
        </h1>
        <p className="text-text-secondary text-lg font-medium">Monitor and control your spending</p>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Budget</h3>
            <div className="w-12 h-12 bg-gradient-royal rounded-xl flex items-center justify-center shadow-glow">
              <WalletIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">₹{totalBudgeted.toLocaleString()}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-royal-600">Monthly allocation</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Spent</h3>
            <div className="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center shadow-glow-sunset">
              <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">₹{totalSpent.toLocaleString()}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-sunset-600">{((totalSpent / totalBudgeted) * 100).toFixed(1)}% of budget</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Remaining</h3>
            <div className={`w-12 h-12 ${remaining > 0 ? 'bg-gradient-emerald' : 'bg-gradient-rose'} rounded-xl flex items-center justify-center ${remaining > 0 ? 'shadow-glow-emerald' : 'shadow-glow-rose'}`}>
              {remaining > 0 ? (
                <ArrowTrendingDownIcon className="w-6 h-6 text-white" />
              ) : (
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
          <p className={`text-3xl font-bold mb-2 ${remaining > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            ₹{Math.abs(remaining).toLocaleString()}
          </p>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-bold ${remaining > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              {remaining > 0 ? 'Under budget' : 'Over budget'}
            </span>
          </div>
        </div>
      </div>

      {/* Month Selector */}
      <div className="card-premium p-6 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-primary">Budget for {selectedMonth}</h2>
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="input-field"
          >
            <option>January 2024</option>
            <option>December 2023</option>
            <option>November 2023</option>
          </select>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="card-premium p-6">
        <h2 className="text-xl font-bold text-text-primary mb-6">Category Breakdown</h2>
        <div className="space-y-4">
          {budgetCategories.map((category, index) => {
            const percentage = (category.spent / category.budgeted) * 100;
            const isOverBudget = category.spent > category.budgeted;
            
            return (
              <div key={index} className="p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-text-primary">{category.name}</h3>
                  <div className="text-right">
                    <p className="font-bold text-text-primary">₹{category.spent.toLocaleString()} / ₹{category.budgeted.toLocaleString()}</p>
                    <p className={`text-sm font-medium ${isOverBudget ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {percentage.toFixed(1)}% used
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      isOverBudget ? 'bg-gradient-rose' : 'bg-gradient-emerald'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                
                {isOverBudget && (
                  <p className="text-xs text-rose-600 mt-2 font-medium">
                    ₹{(category.spent - category.budgeted).toLocaleString()} over budget
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">Budget Actions</h3>
          <div className="space-y-3">
            <button className="btn-primary w-full">Set New Budget</button>
            <button className="btn-secondary w-full">Adjust Categories</button>
            <button className="btn-secondary w-full">View Spending Trends</button>
          </div>
        </div>

        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">Budget Tips</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Try the 50/30/20 rule for better budgeting</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <p className="text-sm font-medium text-emerald-800">You're doing great with utilities!</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <p className="text-sm font-medium text-amber-800">Consider reducing shopping expenses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
