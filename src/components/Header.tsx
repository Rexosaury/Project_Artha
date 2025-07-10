import React from 'react';
import { UserIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { userProfile } from '../data/dummyData';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-premium border-b-2 border-royal-100 px-4 lg:px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:ml-0 ml-12">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-royal rounded-2xl flex items-center justify-center shadow-glow animate-pulse-glow relative overflow-hidden">
            <span className="text-white font-bold text-lg lg:text-xl relative z-10">₹</span>
            <div className="absolute inset-0 bg-gradient-aurora opacity-30 animate-gradient-shift"></div>
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-shift">
              Project Artha
            </h1>
            <p className="text-xs lg:text-sm text-text-secondary hidden sm:block font-medium">
              Your AI Financial Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-4">
          {/* Performance Badge */}
          <div className="hidden md:flex items-center space-x-2 bg-gradient-emerald px-3 py-2 rounded-xl shadow-glow-emerald hover:scale-105 transition-all duration-300">
            <SparklesIcon className="w-4 h-4 text-white animate-pulse" />
            <div className="text-xs">
              <span className="text-white font-bold">+{userProfile.netWorthGrowth}% this year!</span>
            </div>
          </div>

          {/* User Avatar & Info */}
          <div className="flex items-center space-x-3 card-premium px-3 py-2 hover:scale-105 transition-all duration-300">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-sunset rounded-xl flex items-center justify-center shadow-glow-sunset animate-float">
              <span className="text-white font-bold text-sm lg:text-base">{userProfile.initials}</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-text-primary">Welcome back, {userProfile.name}!</p>
              <p className="text-xs text-text-secondary font-medium">₹{(userProfile.totalSavings / 100000).toFixed(1)}L saved</p>
            </div>
          </div>

          <button className="btn-secondary flex items-center space-x-2 hover:scale-105 px-3 py-2 text-xs">
            <UserIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
