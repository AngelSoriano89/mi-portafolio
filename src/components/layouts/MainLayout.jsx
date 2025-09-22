import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ 
  children, 
  title = 'Angel Soriano - Frontend Developer',
  description = 'Desarrollador Frontend especializado en React, Next.js y experiencias web excepcionales. Construyo interfaces modernas, accesibles y de alto rendimiento.',
  image = '/images/og-image.jpg',
  url = 'https://angelsoriano.dev'
}) => {
  const siteTitle = title.includes('Angel Soriano') ? title : `${title} | Angel Soriano`;
  
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={url} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Angel Soriano" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:creator" content="@angelsoriano89" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Angel Soriano" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#0a192f" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Angel Soriano",
              "url": url,
              "image": image,
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": "Universidad de Guayaquil",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Guayaquil",
                "addressCountry": "Ecuador"
              },
              "email": "angelsorianodeveloper89@gmail.com",
              "telephone": "+593985150696",
              "sameAs": [
                "https://github.com/AngelSoriano89",
                "https://linkedin.com/in/angel-soriano-98353b142",
                "https://codepen.io/angelsoriano89"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-navy text-slate font-sans antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-navy px-4 py-2 rounded-md font-medium z-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Saltar al contenido principal
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        {/* Background decorations */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 dot-grid opacity-20" />
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
