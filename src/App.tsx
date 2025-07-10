import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Simulations from './pages/Simulations';
import Exports from './pages/Exports';
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
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-royal rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-ocean rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-emerald rounded-full opacity-5 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <Header />
      <div className="flex relative z-10">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 min-h-screen lg:ml-0 ml-0">
          <div className="lg:p-0 p-4">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
