import React from 'react';
import { UserIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { userProfile } from '../data/dummyData';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-soft border-b border-bg-tertiary px-4 lg:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:ml-0 ml-12">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-blue rounded-2xl flex items-center justify-center shadow-glow animate-pulse-soft">
            <span className="text-white font-bold text-lg lg:text-xl">₹</span>
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-fin-primary to-fin-accent bg-clip-text text-transparent">
              FinGenie
            </h1>
            <p className="text-xs lg:text-sm text-text-secondary hidden sm:block font-medium">
              Your AI Financial Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          {/* Performance Badge */}
          <div className="hidden md:flex items-center space-x-3 bg-gradient-success px-4 py-2 rounded-xl shadow-glow-green">
            <SparklesIcon className="w-5 h-5 text-white" />
            <div className="text-sm">
              <span className="text-white font-semibold">+{userProfile.netWorthGrowth}% this year!</span>
            </div>
          </div>

          {/* User Avatar & Info */}
          <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 shadow-soft">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-glow-gold">
              <span className="text-white font-bold text-sm lg:text-base">{userProfile.initials}</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">Welcome back, {userProfile.name}!</p>
              <p className="text-xs text-text-secondary font-medium">₹{(userProfile.totalSavings / 100000).toFixed(1)}L saved</p>
            </div>
          </div>

          <button className="btn-secondary flex items-center space-x-2">
            <UserIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
