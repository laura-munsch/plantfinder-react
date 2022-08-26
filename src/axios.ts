import axios from "axios";

export const AUTH_TOKEN_KEY = "AUTH_TOKEN";

const axiosHttpClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosHttpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
});

export default axiosHttpClient;
