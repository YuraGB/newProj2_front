import { useMutation } from "@tanstack/react-query";
import { TLoginFormValues } from "@/modules/login/validation.ts";
import apiCall from "@/lib/axiosBase.ts";
import { TResponseAuth } from "@/types/auth";
import { toast } from "sonner";
import useUserStore from "@/stores/userStore.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

export const useLoginApi = () => {
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const setToken = useAccessTokenStore((state) => state.setToken);
  const {
    mutate: loginHandler,
    error: errorLogin,
    data: userLogged,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async (data: TLoginFormValues) => {
      const response = await apiCall.post<TResponseAuth>("/login", data);
      return response.data;
    },
    onError: () =>
      toast.error("User not logged in", {
        description: "There has been an error",
      }),
    onSuccess: (data: TResponseAuth) => {
      const { user, accessToken } = data;

      setToken(accessToken);
      setCurrentUser(user);

      toast.success("User logged in", {
        description: `The User ${user.userName} was successfully logged in`,
      });
    },
  });

  return {
    errorLogin,
    loginHandler,
    isLoading,
    userLogged,
  };
};
