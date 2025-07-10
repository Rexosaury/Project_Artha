import React from 'react';
import { UserIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { userProfile } from '../data/dummyData';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-premium border-b-2 border-royal-100 px-4 lg:px-6 py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:ml-0 ml-12">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-royal rounded-3xl flex items-center justify-center shadow-glow animate-pulse-glow relative overflow-hidden">
            <span className="text-white font-bold text-xl lg:text-2xl relative z-10">₹</span>
            <div className="absolute inset-0 bg-gradient-aurora opacity-30 animate-gradient-shift"></div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-shift">
              FinGenie
            </h1>
            <p className="text-sm lg:text-base text-text-secondary hidden sm:block font-semibold">
              Your AI Financial Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-8">
          {/* Performance Badge */}
          <div className="hidden md:flex items-center space-x-3 bg-gradient-emerald px-6 py-3 rounded-2xl shadow-glow-emerald hover:scale-105 transition-all duration-300">
            <SparklesIcon className="w-6 h-6 text-white animate-pulse" />
            <div className="text-sm">
              <span className="text-white font-bold">+{userProfile.netWorthGrowth}% this year!</span>
            </div>
          </div>

          {/* User Avatar & Info */}
          <div className="flex items-center space-x-4 card-premium px-4 py-3 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-glow-sunset animate-float">
              <span className="text-white font-bold text-base lg:text-lg">{userProfile.initials}</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-text-primary">Welcome back, {userProfile.name}!</p>
              <p className="text-xs text-text-secondary font-semibold">₹{(userProfile.totalSavings / 100000).toFixed(1)}L saved</p>
            </div>
          </div>

          <button className="btn-secondary flex items-center space-x-2 hover:scale-105">
            <UserIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
