import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

export const client = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 1200000,
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config,
    params: {
      ...config.params,
      api_token: Config.API_KEY,
    },
  };
});
