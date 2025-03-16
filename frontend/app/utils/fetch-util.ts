const apiUrl = 'http://localhost:3000';
import axios, { type AxiosError, type AxiosInstance } from 'axios';

export type FetchConfig = {
  type: 'public' | 'authenticated';
};

const getAxios = (config: FetchConfig): AxiosInstance => {
  if (config.type === 'public') {
    return axios;
  }

  const token = localStorage.getItem('auth-token');
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const get = async <T>(
  url: string,
  config: FetchConfig = { type: 'authenticated' },
): Promise<T> => {
  return getAxios(config)
    .get<T>(`${apiUrl}${url}`)
    .then((res) => res.data);
};

export const post = async <T>(
  url: string,
  body: unknown,
  config: FetchConfig = { type: 'authenticated' },
): Promise<T> => {
  return getAxios(config)
    .post<T>(`${apiUrl}${url}`, body)
    .then(
      (res) => res.data,
      (error: AxiosError) => Promise.reject(error?.response?.data),
    );
};
