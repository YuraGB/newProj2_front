import { useMutation } from "@tanstack/react-query";
import { TUser } from "@/types/auth";
import apiCall from "@/lib/axiosBase.ts";

export const useEditUserApi = () => {
  const {
    mutate: editUserAction,
    error: errorEditingUserInfo,
    data: editedUser,
    isPending: updateInProgress,
  } = useMutation({
    mutationFn: async (data: TUser): Promise<TUser> => {
      const response = await apiCall.post<TUser>("/edit_user", data);
      return response.data;
    },
  });

  return {
    editedUser,
    editUserAction,
    errorEditingUserInfo,
    updateInProgress,
  };
};
