import React from 'react';
import { 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  ShieldExclamationIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';
import { AnomalyAlert } from '../types';

interface AnomalyAlertsProps {
  alerts: AnomalyAlert[];
  className?: string;
}

const AnomalyAlerts: React.FC<AnomalyAlertsProps> = ({ alerts, className = '' }) => {
  const getSeverityConfig = (severity: AnomalyAlert['severity']) => {
    switch (severity) {
      case 'high':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
          icon: ExclamationTriangleIcon
        };
      case 'medium':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600',
          icon: ShieldExclamationIcon
        };
      case 'low':
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600',
          icon: InformationCircleIcon
        };
    }
  };

  const getTypeIcon = (type: AnomalyAlert['type']) => {
    switch (type) {
      case 'expense':
        return ArrowTrendingUpIcon;
      case 'income':
        return ArrowTrendingDownIcon;
      case 'investment':
        return InformationCircleIcon;
    }
  };

  if (alerts.length === 0) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center space-x-2">
          <InformationCircleIcon className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">All good! No anomalies detected.</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-fin-danger to-fin-warning bg-clip-text text-transparent">
          🚨 Smart Alerts
        </h3>
        <p className="text-text-secondary font-medium mt-1">AI-powered anomaly detection</p>
      </div>
      {alerts.map((alert) => {
        const severityConfig = getSeverityConfig(alert.severity);
        const TypeIcon = getTypeIcon(alert.type);
        const SeverityIcon = severityConfig.icon;

        return (
          <div
            key={alert.id}
            className={`${severityConfig.bgColor} ${severityConfig.borderColor} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-strong hover:scale-102 animate-slide-up`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <SeverityIcon className={`w-5 h-5 ${severityConfig.iconColor}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <TypeIcon className={`w-4 h-4 ${severityConfig.iconColor}`} />
                  <h4 className={`font-medium ${severityConfig.textColor}`}>
                    {alert.title}
                  </h4>
                  {alert.amount > 0 && (
                    <span className={`text-sm font-bold ${severityConfig.textColor}`}>
                      ₹{alert.amount.toLocaleString()}
                    </span>
                  )}
                </div>
                
                <p className={`text-sm ${severityConfig.textColor} mb-2`}>
                  {alert.description}
                </p>
                
                <div className={`text-xs ${severityConfig.textColor} bg-white bg-opacity-50 rounded px-2 py-1 mb-2`}>
                  💡 <strong>Recommendation:</strong> {alert.recommendation}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${severityConfig.textColor} opacity-75`}>
                    {alert.date.toLocaleDateString()} • {alert.category}
                  </span>
                  
                  <div className="flex space-x-2">
                    <button className={`text-xs px-3 py-1 rounded-full border ${severityConfig.borderColor} ${severityConfig.textColor} hover:bg-white hover:bg-opacity-50 transition-colors`}>
                      Show Details
                    </button>
                    <button className={`text-xs px-3 py-1 rounded-full bg-white ${severityConfig.textColor} hover:bg-opacity-80 transition-colors`}>
                      Fix Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnomalyAlerts;
