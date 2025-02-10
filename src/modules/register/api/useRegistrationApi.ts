import { useMutation } from "@tanstack/react-query";
import { TNewUser, TUser } from "@/types";
import apiCall from "@/lib/axiosBase.ts";
import { toast } from "sonner";

export const useRegistrationApi = () => {
  const {
    mutate: createNewUser,
    error: errorCreateNewUser,
    data: newUserCreated,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async (data: TNewUser) => {
      const response = await apiCall.post<TUser>("/register", data);
      return response.data;
    },
    onError: () =>
      toast.error("new user not created", {
        description: "There has been an error",
      }),
    onSuccess: (data: TUser) =>
      toast.success("New user created", {
        description: `The User ${data.userName} was successfully created`,
      }),
  });

  return {
    createNewUser,
    isLoading,
    errorCreateNewUser,
    newUserCreated,
  };
};
