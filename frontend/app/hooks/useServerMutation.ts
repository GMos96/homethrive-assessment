import { useState } from 'react';
import { AxiosError } from 'axios';

export const useServerMutation = <Body, ReturnType = void>(
  fetcher: (body: Body) => Promise<ReturnType>,
) => {
  const [loading, setLoading] = useState(false);

  const mutate = async (body: Body): Promise<ReturnType> => {
    setLoading(true);
    return fetcher(body)
      .then((data) => {
        setLoading(false);
        return data;
      })
      .catch((error: AxiosError) => Promise.reject(error))
      .finally(() => setLoading(false));
  };

  return { loading, mutate };
};
