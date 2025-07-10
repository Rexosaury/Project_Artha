import React from 'react';
import { Message } from '../types';
import Chart from './Chart';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
        <p className="text-sm">{message.text}</p>
        <div className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        {message.chart && (
          <div className="mt-3">
            <Chart chartData={message.chart} className="!p-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
