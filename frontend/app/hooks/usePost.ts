import { useState } from 'react';

export const usePost = <Body, ReturnType = void>(
  fetcher: (body: Body) => Promise<ReturnType>,
) => {
  const [loading, setLoading] = useState(false);

  const post = async (body: Body): Promise<ReturnType> => {
    setLoading(true);
    return fetcher(body)
      .then((data) => {
        setLoading(false);
        return data;
      })
      .catch((error) => Promise.reject(error))
      .finally(() => setLoading(false));
  };

  return { loading, post };
};
