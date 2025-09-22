import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ message, delay = 0, onAnimationComplete = () => {} }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleTypewriterComplete = () => {
    setAnimationComplete(true);
    onAnimationComplete();
  };

  const messageVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  if (!showMessage) return null;

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      className={`flex mb-4 md:mb-6 px-2 md:px-0 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            message.type === 'user' 
              ? 'bg-surface text-primary' 
              : 'bg-soft border-2 border-surface text-inverse'
          }`}>
            {message.type === 'user' ? '👤' : '🤖'}
          </div>
        </div>

        {/* Message Content */}
        <div className={`relative px-3 md:px-4 py-2 md:py-3 max-w-full text-sm md:text-base rounded-bubble ${
          message.type === 'user'
            ? 'bg-surface text-primary'
            : 'border border-secondary shadow-custom text-primary'
        }`}
        style={{
          backgroundColor: message.type === 'user' ? undefined : '#004238',
          ...(message.type === 'user' ? {
            borderBottomRightRadius: '8px'
          } : {
            borderBottomLeftRadius: '8px'
          })
        }}>
          {message.type === 'ai' && message.typewriter && !animationComplete ? (
            <div className="prose prose-sm max-w-none">
              <TypewriterText
                text={message.content}
                speed={10}
                onComplete={handleTypewriterComplete}
                className="text-primary"
              />
            </div>
          ) : (
            <div className={`prose prose-sm max-w-none ${
              message.type === 'user' 
                ? 'prose-invert' 
                : 'prose-slate'
            }`}>
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-accent">{children}</strong>,
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline text-accent hover:text-primary transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => <ul className="list-none space-y-1 my-2">{children}</ul>,
                  li: ({ children }) => <li className="flex items-start">{children}</li>
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}

          {/* Timestamp */}
          <div className={`text-xs mt-2 ${
            message.type === 'user' 
              ? 'text-secondary' 
              : 'text-muted'
          }`}>
            {new Date(message.timestamp).toLocaleTimeString('es-ES', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
