import { useEffect, useState } from 'react';

const useFetch = (apiUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        const response = await res.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    data,
    setData,
    loading,
    error,
  };
};

export default useFetch;
