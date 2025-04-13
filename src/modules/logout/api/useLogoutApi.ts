import { useMutation } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";

export const useLogoutApi = () => {
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
  });

  return {
    loginOutAction,
    loggedOut,
    errorLoggedOut,
    isLoading,
  };
};
