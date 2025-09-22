import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import { conversations } from '../../data/conversations';

const ConversationArea = ({ activeConversation, onSidebarToggle }) => {
  const messagesEndRef = useRef(null);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const currentConversation = conversations.find(conv => conv.id === activeConversation);

  // Reset messages when conversation changes
  useEffect(() => {
    setVisibleMessages([]);
    setCurrentMessageIndex(0);
  }, [activeConversation]);

  // Show messages progressively with improved timing
  useEffect(() => {
    if (currentConversation && currentMessageIndex < currentConversation.messages.length) {
      const message = currentConversation.messages[currentMessageIndex];
      // Optimized timing for faster presentation
      const baseDelay = currentMessageIndex === 0 ? 200 : 400;
      const lengthDelay = message.type === 'ai' ? Math.min(message.content.length * 2, 800) : 300;
      const totalDelay = baseDelay + (message.type === 'ai' ? lengthDelay : 0);

      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, currentConversation.messages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, totalDelay);

      return () => clearTimeout(timer);
    }
  }, [currentConversation, currentMessageIndex]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages]);

  if (!currentConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-primary-50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-soft">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-lg font-medium text-inverse mb-2">
            Selecciona una conversación
          </h3>
          <p className="text-muted">
            Elige una sección del sidebar para comenzar a explorar mi portafolio
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-primary-50">
      {/* Header */}
      <div className="bg-surface border-b border-secondary px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <button
              onClick={onSidebarToggle}
              className="lg:hidden p-2 hover:bg-hover rounded-lg transition-colors text-secondary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{currentConversation.icon}</span>
              <div>
                <h1 className="text-lg font-semibold text-primary">
                  {currentConversation.title}
                </h1>
                <p className="text-sm text-secondary">
                  Conversación con Angel Soriano
                </p>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2 text-sm text-secondary">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>En línea</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-2 md:px-6 py-4 md:py-6 scroll-smooth">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {visibleMessages.map((message, index) => (
              <ChatMessage
                key={`${message.id}-${activeConversation}`}
                message={message}
                delay={index * 100}
              />
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {currentMessageIndex < currentConversation.messages.length && visibleMessages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start mb-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-soft border-2 border-surface flex items-center justify-center text-sm font-medium text-inverse">
                  🤖
                </div>
                <div className="bg-surface border border-secondary px-4 py-3 shadow-custom" style={{ borderRadius: '18px', borderBottomLeftRadius: '8px' }}>
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-muted rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-muted rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-muted rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area (Disabled for portfolio) */}
      <div className="bg-surface border-t border-secondary px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-1 bg-surface-light rounded-full px-3 md:px-4 py-2 md:py-3 text-secondary cursor-not-allowed text-sm md:text-base">
              💬 Esta es una demo del portafolio. Usa el sidebar para navegar...
            </div>
            <button 
              disabled
              className="p-2 md:p-3 bg-card text-muted rounded-full cursor-not-allowed hover:bg-hover transition-colors"
              title="Función no disponible en demo"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationArea;
