import React, { useState } from 'react';
import { ArrowsRightLeftIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const transactions = [
    { id: 1, date: '2024-01-15', description: 'Salary Credit', amount: 85000, type: 'credit', category: 'Income' },
    { id: 2, date: '2024-01-14', description: 'Grocery Shopping - BigBasket', amount: -2500, type: 'debit', category: 'Food' },
    { id: 3, date: '2024-01-13', description: 'SIP - HDFC Top 100 Fund', amount: -10000, type: 'debit', category: 'Investment' },
    { id: 4, date: '2024-01-12', description: 'Uber Ride', amount: -350, type: 'debit', category: 'Transportation' },
    { id: 5, date: '2024-01-11', description: 'Netflix Subscription', amount: -799, type: 'debit', category: 'Entertainment' },
    { id: 6, date: '2024-01-10', description: 'Electricity Bill', amount: -1200, type: 'debit', category: 'Utilities' },
    { id: 7, date: '2024-01-09', description: 'Amazon Purchase', amount: -3500, type: 'debit', category: 'Shopping' },
    { id: 8, date: '2024-01-08', description: 'Interest Credit', amount: 450, type: 'credit', category: 'Income' },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalCredits = transactions.filter(t => t.type === 'credit').reduce((sum, t) => sum + t.amount, 0);
  const totalDebits = Math.abs(transactions.filter(t => t.type === 'debit').reduce((sum, t) => sum + t.amount, 0));

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Transactions
        </h1>
        <p className="text-text-secondary text-lg font-medium">Track all your financial transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Credits</h3>
            <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center shadow-glow-emerald">
              <span className="text-white font-bold text-lg">+</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-emerald-600 mb-2">₹{totalCredits.toLocaleString()}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-emerald-600">This month</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Total Debits</h3>
            <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center shadow-glow-rose">
              <span className="text-white font-bold text-lg">-</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-rose-600 mb-2">₹{totalDebits.toLocaleString()}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-rose-600">This month</span>
          </div>
        </div>

        <div className="card-aurora p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider">Net Flow</h3>
            <div className="w-12 h-12 bg-gradient-royal rounded-xl flex items-center justify-center shadow-glow">
              <ArrowsRightLeftIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className={`text-3xl font-bold mb-2 ${(totalCredits - totalDebits) > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            ₹{Math.abs(totalCredits - totalDebits).toLocaleString()}
          </p>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-bold ${(totalCredits - totalDebits) > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              {(totalCredits - totalDebits) > 0 ? 'Positive' : 'Negative'}
            </span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card-premium p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 w-full"
            />
          </div>
          <div className="flex items-center space-x-3">
            <FunnelIcon className="w-5 h-5 text-text-tertiary" />
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="input-field"
            >
              <option value="all">All Transactions</option>
              <option value="credit">Credits Only</option>
              <option value="debit">Debits Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="card-premium p-6">
        <h2 className="text-xl font-bold text-text-primary mb-6">Recent Transactions</h2>
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  transaction.type === 'credit' ? 'bg-emerald-100' : 'bg-rose-100'
                }`}>
                  <span className={`font-bold ${
                    transaction.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{transaction.description}</h3>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm text-text-secondary">{transaction.date}</p>
                    <span className="text-xs px-2 py-1 bg-royal-100 text-royal-600 rounded-full font-medium">
                      {transaction.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${
                  transaction.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                </p>
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
            <button className="btn-primary w-full">Export Transactions</button>
            <button className="btn-secondary w-full">Set Up Alerts</button>
            <button className="btn-secondary w-full">Categorize Transactions</button>
          </div>
        </div>

        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Most spending on Food & Dining this month</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <p className="text-sm font-medium text-emerald-800">Regular SIP investments detected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
