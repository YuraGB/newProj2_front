import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axiosBase.ts";
import { TUser } from "@/types";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useProfile = () => {
  const navigate = useNavigate();
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
  });

  useEffect(() => {
    if (errorProfileData) {
      navigate("/");
    }
  }, [errorProfileData]);

  return {
    profileData,
    errorProfileData,
    loadingProfile,
  };
};
