import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import ConversationArea from './ConversationArea';

const ChatLayout = () => {
  const [activeConversation, setActiveConversation] = useState('inicio');
  const [sidebarOpen, setSidebarOpen] = useState(true); // Abierto por defecto

  // Manejar el sidebar en diferentes tamaños de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true); // Siempre abierto en desktop
      } else {
        setSidebarOpen(false); // Cerrado en móvil
      }
    };

    // Ejecutar al cargar
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleConversationChange = (conversationId) => {
    setActiveConversation(conversationId);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex bg-primary"
    >
      {/* Sidebar */}
      <Sidebar
        activeConversation={activeConversation}
        onConversationChange={handleConversationChange}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Chat Area */}
      <ConversationArea
        activeConversation={activeConversation}
        onSidebarToggle={toggleSidebar}
      />
    </motion.div>
  );
};

export default ChatLayout;
