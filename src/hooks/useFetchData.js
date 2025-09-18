// src/hooks/useFetchData.js

import { useState, useEffect } from 'react';

const useFetchData = (dataArray) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simula una llamada a una API
    const fetchData = async () => {
      try {
        // Simula un pequeño retraso para mostrar un estado de carga
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData(dataArray);
      } catch (err) {
        setError('No se pudieron cargar los datos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataArray]);

  return { data, loading, error };
};

export default useFetchData;
