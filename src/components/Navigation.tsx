import React, { useState } from 'react';
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CalculatorIcon,
  DocumentArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowTrendingUpIcon,
  WalletIcon,
  DocumentTextIcon,
  FlagIcon,
  ArrowsRightLeftIcon,
  CreditCardIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  DocumentIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
  BellIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface NavSection {
  title: string;
  items: NavItem[];
  isCollapsible?: boolean;
}

interface NavItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<any>;
  badge?: string;
  isNew?: boolean;
  isPro?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

  const navSections: NavSection[] = [
    {
      title: 'Overview',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: ChartBarIcon },
        { id: 'chat', label: 'AI Assistant', icon: ChatBubbleLeftRightIcon, badge: 'AI' },
      ]
    },
    {
      title: 'Investments',
      isCollapsible: true,
      items: [
        { id: 'investments', label: 'Portfolio', icon: ArrowTrendingUpIcon },
        { id: 'simulations', label: 'Goal Planning', icon: CalculatorIcon },
        { id: 'reports', label: 'Performance', icon: DocumentTextIcon, isNew: true },
      ]
    },
    {
      title: 'Banking',
      isCollapsible: true,
      items: [
        { id: 'transactions', label: 'Transactions', icon: ArrowsRightLeftIcon },
        { id: 'cards', label: 'Cards & Accounts', icon: CreditCardIcon },
        { id: 'loans', label: 'Loans & EMIs', icon: BanknotesIcon },
      ]
    },
    {
      title: 'Planning',
      isCollapsible: true,
      items: [
        { id: 'budgeting', label: 'Budget Tracker', icon: WalletIcon },
        { id: 'goals', label: 'Financial Goals', icon: FlagIcon },
        { id: 'insurance', label: 'Insurance', icon: ShieldCheckIcon, isPro: true },
        { id: 'taxes', label: 'Tax Planning', icon: DocumentIcon, isPro: true },
      ]
    },
    {
      title: 'Tools',
      isCollapsible: true,
      items: [
        { id: 'exports', label: 'Data Export', icon: DocumentArrowDownIcon },
        { id: 'settings', label: 'Settings', icon: CogIcon },
        { id: 'help', label: 'Help & Support', icon: QuestionMarkCircleIcon },
      ]
    }
  ];

  const handleTabChange = (tab: TabType) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
  };

  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const renderNavItem = (item: NavItem) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <button
        key={item.id}
        onClick={() => handleTabChange(item.id)}
        className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
          isActive
            ? 'bg-gradient-royal text-white shadow-glow transform scale-105'
            : 'text-text-secondary hover:bg-white/90 hover:text-text-primary hover:shadow-card hover:scale-102'
        }`}
      >
        <Icon className={`w-5 h-5 transition-transform duration-300 relative z-10 ${isActive ? 'scale-110 animate-pulse' : 'group-hover:scale-110'}`} />
        <span className="font-medium text-sm relative z-10 flex-1 text-left">{item.label}</span>

        {/* Badges */}
        <div className="flex items-center space-x-1 relative z-10">
          {item.badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              isActive ? 'bg-white/20 text-white' : 'bg-royal-100 text-royal-600'
            }`}>
              {item.badge}
            </span>
          )}
          {item.isNew && (
            <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-600">
              NEW
            </span>
          )}
          {item.isPro && (
            <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-sunset-100 text-sunset-600">
              PRO
            </span>
          )}
        </div>

        {isActive && (
          <div className="absolute inset-0 bg-gradient-aurora opacity-20 animate-gradient-shift"></div>
        )}
      </button>
    );
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
      <nav className="hidden lg:block bg-white/95 backdrop-blur-md shadow-premium border-r-2 border-royal-100 w-72 min-h-screen p-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-lg font-bold bg-gradient-to-r from-royal-600 to-ocean-500 bg-clip-text text-transparent mb-2">Navigation</h2>
            <div className="w-12 h-0.5 bg-gradient-royal rounded-full shadow-glow"></div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-2">
              <button className="btn-primary flex items-center justify-center space-x-1 py-2 px-3">
                <PlusIcon className="w-4 h-4" />
                <span className="text-xs">Add Goal</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-1 py-2 px-3">
                <BellIcon className="w-4 h-4" />
                <span className="text-xs">Alerts</span>
              </button>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-3">
            {navSections.map((section) => {
              const isCollapsed = collapsedSections.includes(section.title);

              return (
                <div key={section.title} className="space-y-1">
                  {/* Section Header */}
                  <div className="flex items-center justify-between px-2 py-1">
                    <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                      {section.title}
                    </h3>
                    {section.isCollapsible && (
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="p-1 hover:bg-royal-100 rounded transition-colors"
                      >
                        {isCollapsed ? (
                          <ChevronRightIcon className="w-3 h-3 text-text-tertiary" />
                        ) : (
                          <ChevronDownIcon className="w-3 h-3 text-text-tertiary" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Section Items */}
                  {(!section.isCollapsible || !isCollapsed) && (
                    <div className="space-y-1">
                      {section.items.map(renderNavItem)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-4 border-t border-royal-100">
            <div className="bg-gradient-to-r from-royal-50 to-ocean-50 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-2">
                <StarIcon className="w-4 h-4 text-sunset-500" />
                <span className="text-xs font-bold text-text-primary">Upgrade to Pro</span>
              </div>
              <p className="text-xs text-text-secondary mb-3">
                Unlock advanced features and insights
              </p>
              <button className="btn-primary w-full py-2 text-xs">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <nav className="bg-white/95 backdrop-blur-md w-80 min-h-screen p-4 shadow-strong overflow-y-auto">
            <div className="space-y-4 mt-16">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-lg font-bold bg-gradient-to-r from-royal-600 to-ocean-500 bg-clip-text text-transparent mb-2">Navigation</h2>
                <div className="w-12 h-0.5 bg-gradient-royal rounded-full shadow-glow"></div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <button className="btn-primary flex items-center justify-center space-x-1 py-2 px-3">
                    <PlusIcon className="w-4 h-4" />
                    <span className="text-xs">Add Goal</span>
                  </button>
                  <button className="btn-secondary flex items-center justify-center space-x-1 py-2 px-3">
                    <BellIcon className="w-4 h-4" />
                    <span className="text-xs">Alerts</span>
                  </button>
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="space-y-3">
                {navSections.map((section) => {
                  const isCollapsed = collapsedSections.includes(section.title);

                  return (
                    <div key={section.title} className="space-y-1">
                      {/* Section Header */}
                      <div className="flex items-center justify-between px-2 py-1">
                        <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                          {section.title}
                        </h3>
                        {section.isCollapsible && (
                          <button
                            onClick={() => toggleSection(section.title)}
                            className="p-1 hover:bg-royal-100 rounded transition-colors"
                          >
                            {isCollapsed ? (
                              <ChevronRightIcon className="w-3 h-3 text-text-tertiary" />
                            ) : (
                              <ChevronDownIcon className="w-3 h-3 text-text-tertiary" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Section Items */}
                      {(!section.isCollapsible || !isCollapsed) && (
                        <div className="space-y-1">
                          {section.items.map(renderNavItem)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
