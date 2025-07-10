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
    <div className="min-h-screen bg-light-gray">
      <Header />
      <div className="flex">
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
