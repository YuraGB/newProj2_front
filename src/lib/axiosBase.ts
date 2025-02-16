import axios from "axios";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = useAccessTokenStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await instance.post(
          "/refresh",
          {},
          { withCredentials: true },
        );

        const newAccessToken = data.accessToken;
        useAccessTokenStore.getState().setToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance.request(originalRequest);
      } catch (refreshError) {
        useAccessTokenStore.getState().clearToken();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
