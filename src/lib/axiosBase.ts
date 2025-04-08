import axios, { AxiosRequestConfig } from "axios";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";
import { useBasketStore } from "@/stores/basketStore";
import useUserStore from "@/stores/userStore.ts";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";

interface RetryQueueItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve: (value?: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = useAccessTokenStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ------------------ Response ---------------------

// Create a list to hold the request queue
const refreshAndRetryQueue: RetryQueueItem[] = [];

// Flag to prevent multiple token refresh requests
let isRefreshing = false;

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: AxiosRequestConfig = error.config;

    // if access token is expired but refresh token is still valid
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.canRefresh
    ) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          // Refresh the access token
          const { data } = await instance.post("/refresh", {});

          // Update the request headers with the new access token
          error.config.headers["Authorization"] = `Bearer ${data.accessToken}`;

          // Retry all requests in the queue with the new token
          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            instance
              .request(config)
              .then((response) => resolve(response))
              .catch((err) => reject(err));
          });

          // Clear the queue
          refreshAndRetryQueue.length = 0;

          // Retry the original request
          return instance(originalRequest);
        } catch (refreshError) {
          // clear basket from local storage
          useBasketStore.getState().clearBasket();
          //remove user from store
          useUserStore.getState().removeCurrentUser();

          // Handle token refresh error
          throw refreshError;
        } finally {
          isRefreshing = false;
        }
      }

      // Add the original request to the queue
      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }

    // if access token is expired and refresh token is also expired
    if (error.response?.status === 401 && !error.response.data?.canRefresh) {
      // clear basket from local storage
      useBasketStore.getState().clearBasket();
      //remove user from store
      useUserStore.getState().removeCurrentUser();
      // clear checkout data
      useCheckoutMultiStep.getState().clearCheckout();
    }

    // Return a Promise rejection if the status code is not 401
    return Promise.reject(error);
  },
);

export default instance;
