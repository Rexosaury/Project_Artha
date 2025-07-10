import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 lg:ml-0 ml-12">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-google-blue to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm lg:text-lg">₹</span>
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-google-gray">FinGenie</h1>
            <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">Your Financial Assistant</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="btn-secondary flex items-center space-x-2 text-sm lg:text-base px-2 lg:px-4 py-1 lg:py-2">
            <UserIcon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">Sign in with Google</span>
            <span className="sm:hidden">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
