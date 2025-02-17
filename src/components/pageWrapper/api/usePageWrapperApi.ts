import { useQuery } from "@tanstack/react-query";
import { TUser } from "@/types";
import apiCall from "@/lib/axiosBase.ts";

export const usePageWrapperApi = () => {
  const {
    data: userData,
    error: userDataError,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await apiCall.get<{
        user: TUser;
        accessToken: string | null;
      }>("/user");
      return data;
    },
  });

  return {
    userData,
    userDataError,
    isLoading,
  };
};
