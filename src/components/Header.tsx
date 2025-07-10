import React, { useState } from 'react';
import { UserIcon, SparklesIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { userProfile } from '../data/dummyData';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-premium border-b-2 border-royal-100 px-3 sm:px-4 lg:px-6 py-4 sm:py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-royal-200 shadow-card hover:shadow-medium transition-all duration-300"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-text-primary" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-text-primary" />
          )}
        </button>

        <div className="flex items-center space-x-3 sm:space-x-4 lg:ml-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-royal rounded-2xl flex items-center justify-center shadow-glow animate-pulse-glow relative overflow-hidden">
            <span className="text-white font-bold text-lg sm:text-xl relative z-10">₹</span>
            <div className="absolute inset-0 bg-gradient-aurora opacity-30 animate-gradient-shift"></div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent animate-gradient-shift">
              Project Artha
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary hidden sm:block font-medium">
              Your AI Financial Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Performance Badge - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2 bg-gradient-emerald px-3 py-2 rounded-xl shadow-glow-emerald hover:scale-105 transition-all duration-300">
            <SparklesIcon className="w-4 h-4 text-white animate-pulse" />
            <div className="text-xs">
              <span className="text-white font-bold">+{userProfile.netWorthGrowth}% this year!</span>
            </div>
          </div>

          {/* Mobile Performance Indicator */}
          <div className="lg:hidden w-8 h-8 bg-gradient-emerald rounded-full flex items-center justify-center shadow-glow-emerald">
            <span className="text-white font-bold text-xs">+{userProfile.netWorthGrowth}%</span>
          </div>

          {/* User Avatar & Info */}
          <div className="flex items-center space-x-2 sm:space-x-3 card-premium px-2 sm:px-3 py-2 hover:scale-105 transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-sunset rounded-xl flex items-center justify-center shadow-glow-sunset animate-float">
              <span className="text-white font-bold text-sm sm:text-base">{userProfile.initials}</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-text-primary">Welcome back, {userProfile.name}!</p>
              <p className="text-xs text-text-secondary font-medium">₹{(userProfile.totalSavings / 100000).toFixed(1)}L saved</p>
            </div>
          </div>

          {/* Settings Button - Mobile optimized */}
          <button className="btn-secondary flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2 hover:scale-105 text-xs rounded-xl">
            <UserIcon className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline sm:ml-2">Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
