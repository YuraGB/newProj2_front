import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUserQueryOptions } from "@/modules/api/userApi/fetchUserData.ts";

export const usePageWrapperApi = () => {
  const {
    data: userData,
    error: userDataError,
    isLoading,
  } = useSuspenseQuery(fetchUserQueryOptions);

  return {
    userData,
    userDataError,
    isLoading,
  };
};
