import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axiosBase.ts";
import { TUser } from "@/types/auth";

export const useProfileApi = (isEnabled: boolean = true) => {
  const {
    data: profileData,
    error: errorProfileData,
    isLoading: loadingProfile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const resp = await apiClient.get<TUser>("/profile");
      return resp.data;
    },
    enabled: !isEnabled,
  });

  return {
    profileData,
    errorProfileData,
    loadingProfile,
  };
};
