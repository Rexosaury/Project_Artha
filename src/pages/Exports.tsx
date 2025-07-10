import React, { useState } from 'react';
import { DocumentArrowDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Exports: React.FC = () => {
  const [exportStatus, setExportStatus] = useState<{[key: string]: 'idle' | 'loading' | 'success'}>({});

  const handleExport = (type: 'csv' | 'json', dataType: string) => {
    const key = `${type}-${dataType}`;
    setExportStatus(prev => ({ ...prev, [key]: 'loading' }));

    // Simulate export process
    setTimeout(() => {
      setExportStatus(prev => ({ ...prev, [key]: 'success' }));
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setExportStatus(prev => ({ ...prev, [key]: 'idle' }));
      }, 3000);
    }, 1500);
  };

  const exportOptions = [
    {
      title: 'Portfolio Performance',
      description: 'SIP performance data with returns and benchmarks',
      dataType: 'portfolio',
      icon: '📊',
    },
    {
      title: 'Net Worth History',
      description: 'Monthly net worth progression over time',
      dataType: 'networth',
      icon: '💰',
    },
    {
      title: 'Expense Analysis',
      description: 'Categorized expense breakdown and trends',
      dataType: 'expenses',
      icon: '💳',
    },
    {
      title: 'Chat History',
      description: 'Complete conversation history with FinGenie',
      dataType: 'chat',
      icon: '💬',
    },
    {
      title: 'Goal Simulations',
      description: 'Financial goal projections and scenarios',
      dataType: 'simulations',
      icon: '🎯',
    },
    {
      title: 'Complete Financial Report',
      description: 'Comprehensive report with all financial data',
      dataType: 'complete',
      icon: '📋',
    },
  ];

  const getButtonContent = (type: 'csv' | 'json', dataType: string) => {
    const key = `${type}-${dataType}`;
    const status = exportStatus[key] || 'idle';

    switch (status) {
      case 'loading':
        return (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Exporting...</span>
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircleIcon className="w-4 h-4" />
            <span>Exported!</span>
          </>
        );
      default:
        return (
          <>
            <DocumentArrowDownIcon className="w-4 h-4" />
            <span>Export {type.toUpperCase()}</span>
          </>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-google-gray mb-2">Export Data</h1>
        <p className="text-gray-600">Download your financial data in CSV or JSON format</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exportOptions.map((option) => (
          <div key={option.dataType} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3 mb-4">
              <span className="text-2xl">{option.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-google-gray">{option.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{option.description}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handleExport('csv', option.dataType)}
                disabled={exportStatus[`csv-${option.dataType}`] === 'loading'}
                className="flex-1 btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {getButtonContent('csv', option.dataType)}
              </button>
              
              <button
                onClick={() => handleExport('json', option.dataType)}
                disabled={exportStatus[`json-${option.dataType}`] === 'loading'}
                className="flex-1 btn-secondary flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {getButtonContent('json', option.dataType)}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Export Information */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Export Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">CSV Format</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Compatible with Excel and Google Sheets</li>
              <li>• Easy to analyze and create pivot tables</li>
              <li>• Human-readable format</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-2">JSON Format</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Machine-readable structured data</li>
              <li>• Perfect for API integrations</li>
              <li>• Preserves data relationships</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Exports */}
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-google-gray mb-4">Recent Exports</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-google-gray">Portfolio Performance (CSV)</p>
              <p className="text-sm text-gray-600">Exported 2 hours ago</p>
            </div>
            <button className="text-google-blue hover:underline text-sm">Download Again</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-google-gray">Complete Financial Report (JSON)</p>
              <p className="text-sm text-gray-600">Exported yesterday</p>
            </div>
            <button className="text-google-blue hover:underline text-sm">Download Again</button>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-google-gray">Net Worth History (CSV)</p>
              <p className="text-sm text-gray-600">Exported 3 days ago</p>
            </div>
            <button className="text-google-blue hover:underline text-sm">Download Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exports;
