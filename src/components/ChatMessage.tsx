import React, { useState } from 'react';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ArrowPathIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Message } from '../types';
import Chart from './Chart';

interface ChatMessageProps {
  message: Message;
  onReaction?: (messageId: string, reaction: 'like' | 'dislike') => void;
  onRetry?: (messageId: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onReaction, onRetry }) => {
  const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);
  const isUser = message.sender === 'user';

  const handleReaction = (reactionType: 'like' | 'dislike') => {
    setReaction(reactionType);
    onReaction?.(message.id, reactionType);
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`max-w-xs lg:max-w-md ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'} relative group`}>
        {/* AI Badge for AI messages */}
        {!isUser && (
          <div className="flex items-center space-x-1 mb-2">
            <SparklesIcon className="w-3 h-3 text-google-blue" />
            <span className="text-xs text-google-blue font-medium">FinGenie AI</span>
          </div>
        )}

        <p className="text-sm leading-relaxed">{message.text}</p>

        {message.chart && (
          <div className="mt-3">
            <Chart chartData={message.chart} className="!p-2" />
          </div>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-400 mt-2 opacity-75">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>

        {/* Reaction buttons for AI messages */}
        {!isUser && (
          <div className="flex items-center space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => handleReaction('like')}
              className={`p-1 rounded-full hover:bg-green-100 transition-colors ${
                reaction === 'like' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
              }`}
              title="Helpful"
            >
              <HandThumbUpIcon className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleReaction('dislike')}
              className={`p-1 rounded-full hover:bg-red-100 transition-colors ${
                reaction === 'dislike' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:text-red-600'
              }`}
              title="Not helpful"
            >
              <HandThumbDownIcon className="w-3 h-3" />
            </button>

            <button
              onClick={() => onRetry?.(message.id)}
              className="p-1 rounded-full text-gray-400 hover:text-google-blue hover:bg-blue-100 transition-colors"
              title="Regenerate response"
            >
              <ArrowPathIcon className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
