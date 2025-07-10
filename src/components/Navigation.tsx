import React, { useState } from 'react';
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CalculatorIcon,
  DocumentArrowDownIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: ChartBarIcon },
    { id: 'chat' as TabType, label: 'Chat', icon: ChatBubbleLeftRightIcon },
    { id: 'simulations' as TabType, label: 'Simulations', icon: CalculatorIcon },
    { id: 'exports' as TabType, label: 'Exports', icon: DocumentArrowDownIcon },
  ];

  const handleTabChange = (tab: TabType) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white/80 backdrop-blur-md shadow-soft border-r border-bg-tertiary w-72 min-h-screen p-6">
        <div className="space-y-3">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-text-primary mb-2">Navigation</h2>
            <div className="w-12 h-1 bg-gradient-blue rounded-full"></div>
          </div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-blue text-white shadow-glow transform scale-105'
                    : 'text-text-secondary hover:bg-white/80 hover:text-text-primary hover:shadow-soft hover:scale-102'
                }`}
              >
                <Icon className={`w-6 h-6 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-semibold text-base">{tab.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <nav className="bg-white/95 backdrop-blur-md w-72 min-h-screen p-6 shadow-strong">
            <div className="space-y-3 mt-16">
              <div className="mb-8">
                <h2 className="text-lg font-bold text-text-primary mb-2">Navigation</h2>
                <div className="w-12 h-1 bg-gradient-blue rounded-full"></div>
              </div>

              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-blue text-white shadow-glow'
                        : 'text-text-secondary hover:bg-white/80 hover:text-text-primary hover:shadow-soft'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold text-base">{tab.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
