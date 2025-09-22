import React from 'react';
import { motion } from 'framer-motion';
import { conversations } from '../../data/conversations';

const Sidebar = ({ activeConversation, onConversationChange, isOpen, onToggle }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full bg-surface border-r border-primary z-50 lg:relative lg:translate-x-0"
        style={{ 
          width: '280px',
          boxShadow: 'inset -1px 0 0 var(--shadow-md)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-secondary">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-card border-2 border-primary-300">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Angel Soriano"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center bg-card text-primary font-bold text-lg" style={{display: 'none'}}>
                    AS
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-primary">Angel Soriano</h2>
                  <p className="text-sm text-secondary">Frontend Developer Junior</p>
                </div>
              </div>
              
              {/* Mobile Close Button */}
              <button
                onClick={onToggle}
                className="lg:hidden p-2 hover:bg-hover rounded-lg transition-colors text-secondary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                Conversaciones
              </h3>
              
              {conversations.map((conversation, index) => (
                <motion.button
                  key={conversation.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => {
                    onConversationChange(conversation.id);
                    // Close sidebar on mobile after selection
                    if (window.innerWidth < 1024) {
                      onToggle();
                    }
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 text-left group transform hover:scale-105 ${
                    activeConversation === conversation.id
                      ? 'bg-card border border-light text-primary shadow-lg'
                      : 'hover:bg-hover text-secondary hover:shadow-md'
                  }`}
                >
                  <span className="text-lg">{conversation.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium truncate ${
                      activeConversation === conversation.id
                        ? 'text-primary'
                        : 'text-primary'
                    }`}>
                      {conversation.title}
                    </p>
                    <p className="text-xs text-muted truncate">
                      {conversation.messages[conversation.messages.length - 1]?.content.substring(0, 50)}...
                    </p>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeConversation === conversation.id && (
                    <div className="w-2 h-2 rounded-full bg-surface" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-secondary">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://github.com/AngelSoriano89"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/angel-soriano-98353b142"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="mailto:angelsorianodeveloper89@gmail.com"
                className="p-2 text-muted hover:text-accent transition-colors"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
