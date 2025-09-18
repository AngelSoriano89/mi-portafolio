// src/pages/_app.jsx

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Cada página se encarga de su propio layout (MainLayout) para evitar headers duplicados
  return <Component {...pageProps} />;
}

export default MyApp;
