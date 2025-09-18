// src/components/layouts/MainLayout.jsx

import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, title = 'Portafolio' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Desarrollador web front-end con pasión por la creación de soluciones digitales." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-brand text-white font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
