import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Preconnect para mejor performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* Fuentes optimizadas - Inter como principal */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          
          {/* Meta tags adicionales para SEO */}
          <meta name="theme-color" content="#0a192f" />
          <meta name="msapplication-TileColor" content="#0a192f" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          
          {/* Favicon mejorado */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          
          {/* Manifest para PWA */}
          <link rel="manifest" href="/manifest.json" />
          
          {/* Preload recursos críticos */}
          <link rel="preload" href="/fonts/SFMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        </Head>
        <body className="loading">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.body.classList.remove('loading');
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
