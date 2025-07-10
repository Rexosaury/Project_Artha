import React from 'react';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { GoalProgress } from '../types';

interface GoalProgressCardsProps {
  goals: GoalProgress[];
  className?: string;
}

const GoalProgressCards: React.FC<GoalProgressCardsProps> = ({ goals, className = '' }) => {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBgColor = (percentage: number) => {
    if (percentage >= 70) return 'bg-green-100';
    if (percentage >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const CircularProgress: React.FC<{ percentage: number; size?: number }> = ({ 
    percentage, 
    size = 60 
  }) => {
    const radius = (size - 8) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={getProgressColor(percentage)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-bold ${getProgressColor(percentage)}`}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-fin-primary to-fin-accent bg-clip-text text-transparent">
            🎯 Goal Tracker
          </h3>
          <p className="text-text-secondary font-medium mt-1">Track your financial milestones</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <PlusIcon className="w-4 h-4" />
          <span>Add Goal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className={`card-premium p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer group ${getProgressBgColor(goal.progressPercentage)} bg-opacity-10`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{goal.icon}</span>
                <div>
                  <h4 className="font-medium text-google-gray text-sm">{goal.title}</h4>
                  <p className="text-xs text-gray-600">Target: {goal.targetDate}</p>
                </div>
              </div>
              <CircularProgress percentage={goal.progressPercentage} size={50} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Current</span>
                <span className="font-medium text-google-gray">
                  ₹{(goal.currentAmount / 100000).toFixed(1)}L
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Target</span>
                <span className="font-medium text-google-gray">
                  ₹{(goal.targetAmount / 100000).toFixed(1)}L
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    goal.progressPercentage >= 70 ? 'bg-green-500' :
                    goal.progressPercentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${goal.progressPercentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-gray-600">
                  ₹{goal.monthlyContribution.toLocaleString()}/month
                </div>
                <button className="text-google-blue hover:text-blue-700 text-xs font-medium flex items-center space-x-1">
                  <span>Adjust</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Summary */}
      <div className="mt-4 bg-gradient-to-r from-google-blue to-blue-600 rounded-lg p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Total Goals Progress</h4>
            <p className="text-sm opacity-90">
              {goals.length} active goals • ₹{(goals.reduce((sum, goal) => sum + goal.currentAmount, 0) / 100000).toFixed(1)}L saved
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {Math.round(goals.reduce((sum, goal) => sum + goal.progressPercentage, 0) / goals.length)}%
            </div>
            <div className="text-sm opacity-90">Average</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalProgressCards;
