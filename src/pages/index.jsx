import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import ChatLayout from '../components/chat/ChatLayout';

const HomePage = () => {
  return (
    <MainLayout 
      title="Angel Soriano - Frontend Developer" 
      chatMode={true}
    >
      <ChatLayout />
    </MainLayout>
  );
};

export default HomePage;
