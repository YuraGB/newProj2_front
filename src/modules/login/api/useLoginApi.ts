import { useMutation } from "@tanstack/react-query";
import { TLoginFormValues } from "@/modules/login/validation.ts";
import apiCall from "@/lib/axiosBase.ts";
import { TUser } from "@/types";
import { toast } from "sonner";

export const useLoginApi = () => {
  const {
    mutate: loginHandler,
    error: errorLogin,
    data: userLogged,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async (data: TLoginFormValues) => {
      const response = await apiCall.post<TUser>("/login", data);
      return response.data;
    },
    onError: () =>
      toast.error("User not logged in", {
        description: "There has been an error",
      }),
    onSuccess: (data: TUser) => {
      toast.success("New user created", {
        description: `The User ${data.userName} was successfully created`,
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
