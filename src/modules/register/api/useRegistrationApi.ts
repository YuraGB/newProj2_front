import { useMutation } from "@tanstack/react-query";
import { TNewUser, TResponseAuth } from "@/types/auth";
import apiCall from "@/lib/axiosBase.ts";
import { toast } from "sonner";
import useUserStore from "@/stores/userStore.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

export const useRegistrationApi = () => {
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const setToken = useAccessTokenStore((state) => state.setToken);

  const {
    mutate: createNewUser,
    error: errorCreateNewUser,
    data: newUserCreated,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async (data: TNewUser) => {
      const response = await apiCall.post<TResponseAuth>("/register", data);
      return response.data;
    },
    onError: () =>
      toast.error("new user not created", {
        description: "There has been an error",
      }),
    onSuccess: (data: TResponseAuth) => {
      const { user, accessToken } = data;

      setToken(accessToken);
      setCurrentUser(user);

      toast.success("New user created", {
        description: `The User ${user.userName} was successfully created`,
      });
    },
  });

  return {
    createNewUser,
    isLoading,
    errorCreateNewUser,
    newUserCreated,
  };
};
