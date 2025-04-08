import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUserStore from "@/stores/userStore.ts";
import { useProfileApi } from "@/modules/profile/api/useProfileApi.ts";
import { toast } from "sonner";

export const useProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserStore();
  const { profileData, errorProfileData, loadingProfile } = useProfileApi(
    Boolean(currentUser?.id),
  );

  useEffect(() => {
    if (errorProfileData && !currentUser) {
      toast.error("Access denied", {
        description: "You can't access to this page",
      });
      navigate("/");
    }
  }, [errorProfileData, currentUser, navigate]);

  useEffect(() => {
    if (profileData?.id) {
      setCurrentUser(profileData);
    }
  }, [profileData, setCurrentUser]);

  return {
    currentUser,
    errorProfileData,
    loadingProfile,
  };
};
