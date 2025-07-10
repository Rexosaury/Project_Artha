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
      <div className="border-b border-bg-tertiary p-6 bg-gradient-to-r from-white/90 to-white/70 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-fin-primary to-fin-accent bg-clip-text text-transparent">
              Chat with FinGenie
            </h2>
            <p className="text-text-secondary font-medium">Ask me anything about your finances</p>
          </div>
          <IntegrationBadges showInHeader={true} />
        </div>

        {/* Quick Actions */}
        <div className="mt-3">
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="flex items-center space-x-2 text-sm text-google-blue hover:text-blue-700"
          >
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            <span>Quick Actions</span>
          </button>

          {showQuickActions && (
            <div className="mt-2 flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs bg-blue-50 text-google-blue px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {action}
                </button>
              ))}
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about loans, SIPs, expenses, or financial goals..."
              className="w-full input-field pr-12"
              disabled={isLoading}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-google-blue">
              <MicrophoneIcon className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
