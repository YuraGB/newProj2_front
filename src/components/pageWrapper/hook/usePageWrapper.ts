import { useProfileApi } from "@/modules/profile/api/useProfileApi.ts";
import useUserStore from "@/stores/userStore.ts";
import { useEffect } from "react";

export const usePageWrapper = () => {
  const { setCurrentUser, currentUser } = useUserStore();
  const { profileData } = useProfileApi(!!currentUser);

  useEffect(() => {
    if (profileData?.id) {
      setCurrentUser(profileData);
    }
  }, [profileData]);
};
