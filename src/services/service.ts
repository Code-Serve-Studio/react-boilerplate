/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth } from '@/utils/cookieUtils';
import axios from 'axios';
const baseURL = 'https://reqres.in/api/';

const Axios = axios.create({
  baseURL,
  timeout: 7000,
})

Axios.interceptors.request.use(
  async (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = await getAuth();
    if (token) config.headers.Authorization = 'Bearer ' + token;
    if (token &&
    config?.url?.includes('public')) config.headers.Authorization = '';
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

export default Axios;