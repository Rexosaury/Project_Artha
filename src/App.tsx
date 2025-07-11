import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Simulations from './pages/Simulations';
import Exports from './pages/Exports';
import Investments from './pages/Investments';
import Budgeting from './pages/Budgeting';
import Transactions from './pages/Transactions';
import { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <Chat />;
      case 'simulations':
        return <Simulations />;
      case 'exports':
        return <Exports />;
      case 'investments':
        return <Investments />;
      case 'budgeting':
        return <Budgeting />;
      case 'transactions':
        return <Transactions />;
      case 'reports':
      case 'goals':
      case 'cards':
      case 'loans':
      case 'insurance':
      case 'taxes':
      case 'settings':
      case 'help':
        return (
          <div className="p-6 space-y-6 animate-fade-in">
            <div className="card-premium p-8 text-center">
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} - Coming Soon!
              </h1>
              <p className="text-text-secondary mb-6">
                This feature is under development and will be available soon.
              </p>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="btn-primary"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary relative overflow-hidden">
      {/* Animated Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-royal rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-ocean rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-emerald rounded-full opacity-5 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <Header />
      <div className="flex relative z-10">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 min-h-screen w-full lg:ml-0">
          <div className="w-full mobile-scroll">
            {renderContent()}
          </div>

          {/* AI Branding Footer */}
          <footer className="hidden sm:block bg-white/80 backdrop-blur-md border-t border-royal-100 p-4 mt-8">
            <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-text-tertiary">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gemini AI</span>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs text-text-tertiary">+</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Fi MCP</span>
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="h-4 w-px bg-royal-200"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-text-tertiary">Secure</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-700 font-semibold">Connected</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
