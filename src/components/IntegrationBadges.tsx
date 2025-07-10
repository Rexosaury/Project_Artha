import React from 'react';
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  CpuChipIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

interface IntegrationBadgesProps {
  className?: string;
  showInHeader?: boolean;
}

const IntegrationBadges: React.FC<IntegrationBadgesProps> = ({ 
  className = '', 
  showInHeader = false 
}) => {
  const badges = [
    {
      id: 'gemini',
      name: 'Google Gemini',
      status: 'connected',
      icon: SparklesIcon,
      description: 'AI-powered financial insights',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'fi-mcp',
      name: 'Fi MCP Server',
      status: 'connected',
      icon: CpuChipIcon,
      description: 'Real-time financial data',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      id: 'bank-api',
      name: 'Bank Integration',
      status: 'connected',
      icon: LinkIcon,
      description: 'Secure account linking',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  if (showInHeader) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
          <CheckCircleIcon className="w-3 h-3 text-green-600" />
          <span className="text-xs text-green-700 font-medium">Gemini AI</span>
        </div>
        <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-full">
          <CheckCircleIcon className="w-3 h-3 text-blue-600" />
          <span className="text-xs text-blue-700 font-medium">Fi MCP</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-semibold text-google-gray mb-3">🔗 Connected Services</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.id}
              className={`border rounded-lg p-3 ${badge.color} transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-5 h-5" />
                <CheckCircleIcon className="w-4 h-4 text-green-600" />
              </div>
              
              <h4 className="font-medium text-sm mb-1">{badge.name}</h4>
              <p className="text-xs opacity-80 mb-2">{badge.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">
                  ✅ {badge.status.charAt(0).toUpperCase() + badge.status.slice(1)}
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technical Credibility Footer */}
      <div className="mt-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <SparklesIcon className="w-5 h-5 text-google-blue" />
              <span className="text-sm font-medium text-google-gray">Powered by</span>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285f4'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E" 
                alt="Google" 
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-google-blue">Google Gemini AI</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-600">
            Enterprise-grade security & reliability
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationBadges;
