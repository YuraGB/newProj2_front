import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUserStore from "@/stores/userStore.ts";
import { useProfileApi } from "@/modules/profile/api/useProfileApi.ts";

export const useProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserStore();
  const { profileData, errorProfileData, loadingProfile } = useProfileApi(
    !Boolean(currentUser?.id),
  );

  useEffect(() => {
    if (errorProfileData || !currentUser) {
      console.log(errorProfileData);
      navigate("/");
    }
  }, [errorProfileData]);

  useEffect(() => {
    if (profileData?.id) {
      setCurrentUser(profileData);
    }
  }, [profileData]);

  return {
    currentUser,
    errorProfileData,
    loadingProfile,
  };
};
