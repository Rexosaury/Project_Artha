import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, MicrophoneIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { Message } from '../types';
import ChatMessage from './ChatMessage';
import { dummyMessages } from '../data/dummyData';
import IntegrationBadges from './IntegrationBadges';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const quickActions = [
    "Can I afford a ₹50L home loan?",
    "What if I increase my SIP to ₹20K?",
    "Show my expense anomalies",
    "Plan retirement by age 50",
    "Compare mutual fund options"
  ];

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('loan') || input.includes('home')) {
      return "Based on your financial profile, I can help you assess loan eligibility. Your current savings and SIP investments show good financial discipline. Would you like me to run a detailed affordability analysis?";
    } else if (input.includes('sip') || input.includes('mutual fund')) {
      return "I can analyze your SIP performance and suggest optimizations. Your portfolio shows mixed results - some funds are outperforming while others need attention. Shall I provide detailed recommendations?";
    } else if (input.includes('expense') || input.includes('spending')) {
      return "I've detected some unusual spending patterns in your recent transactions. Your dining expenses increased by 23% last month. Would you like me to create a budget optimization plan?";
    } else if (input.includes('goal') || input.includes('retire')) {
      return "Let me help you plan for your financial goals. Based on your current investment rate, I can project different scenarios for retirement planning. What's your target retirement age?";
    } else if (input.includes('what if') || input.includes('increase')) {
      return "Great question! Let me run that simulation for you. If you increase your SIP to ₹20K, you could reach your goals 2.5 years earlier. Here's the updated projection with the new parameters.";
    } else {
      return "I'm here to help with all your financial questions! I can assist with loan eligibility, SIP analysis, expense tracking, goal planning, and much more. What specific area would you like to explore?";
    }
  };

  const handleReaction = (messageId: string, reaction: 'like' | 'dislike') => {
    console.log(`Message ${messageId} received ${reaction} reaction`);
    // In a real app, this would send feedback to the backend
  };

  const handleRetry = (messageId: string) => {
    console.log(`Retrying message ${messageId}`);
    // In a real app, this would regenerate the AI response
  };

  const handleQuickAction = (action: string) => {
    setInputText(action);
    setShowQuickActions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full card-premium">
      {/* Chat Header */}
      <div className="border-b border-bg-tertiary p-4 sm:p-6 bg-gradient-to-r from-white/90 to-white/70 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-royal-600 via-ocean-400 to-emerald-500 bg-clip-text text-transparent">
              Chat with Project Artha
            </h2>
            <p className="text-text-secondary font-medium text-sm sm:text-base">Ask me anything about your finances</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-text-tertiary">Powered by</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-semibold text-royal-600">Gemini</span>
                <span className="text-xs text-text-tertiary">+</span>
                <span className="text-xs font-semibold text-emerald-600">Fi MCP</span>
              </div>
              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="hidden sm:block">
            <IntegrationBadges showInHeader={true} />
          </div>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="mt-4 space-y-3">
          {/* What-If Simulation Button */}
          <div className="bg-gradient-to-r from-royal-50 to-emerald-50 rounded-xl p-4 border border-royal-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-text-primary">💡 Try a What-If Simulation</h3>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">Popular</span>
            </div>
            <p className="text-xs text-text-secondary mb-3">Explore financial scenarios with AI-powered insights</p>
            <button
              onClick={() => handleQuickAction("What if I increase my SIP by ₹5K?")}
              className="w-full btn-primary text-sm py-3 flex items-center justify-center space-x-2"
            >
              <span>🚀</span>
              <span>What if I increase my SIP by ₹5K?</span>
            </button>
          </div>

          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="flex items-center space-x-2 text-sm text-royal-600 hover:text-royal-700 transition-colors"
          >
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            <span>More Quick Actions</span>
          </button>

          {showQuickActions && (
            <div className="mt-3 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="text-xs bg-white/80 backdrop-blur-sm text-text-primary px-4 py-3 rounded-xl hover:bg-white hover:shadow-card transition-all duration-300 border border-royal-100 text-left"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onReaction={handleReaction}
            onRetry={handleRetry}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-bubble-ai">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-3 sm:p-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about loans, SIPs, expenses..."
              className="w-full input-field pr-12 text-sm sm:text-base py-3 sm:py-4"
              disabled={isLoading}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-royal-500 transition-colors">
              <MicrophoneIcon className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-3 flex items-center justify-center touch-manipulation"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
            <span className="hidden sm:inline sm:ml-2">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
