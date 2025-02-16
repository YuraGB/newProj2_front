import { useMutation } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

export const useLogoutApi = () => {
  const { clearToken } = useAccessTokenStore();
  const {
    mutate: loginOutAction,
    data: loggedOut,
    error: errorLoggedOut,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async () => {
      const response = await apiCall.post<{ message: string }>("/logout");
      return response.data;
    },
    onSuccess: () => clearToken(),
  });

  return {
    loginOutAction,
    loggedOut,
    errorLoggedOut,
    isLoading,
  };
};
