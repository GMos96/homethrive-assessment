import { useEffect, useState } from 'react';

export const useGet = <ReturnType = unknown>(
  fetcher: () => Promise<ReturnType>,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ReturnType>();

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    setLoading(true);
    return fetcher()
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => Promise.reject(error))
      .finally(() => setLoading(false));
  };

  return { loading, get, data };
};
