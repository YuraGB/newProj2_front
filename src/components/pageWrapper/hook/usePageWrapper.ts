import useUserStore from "@/stores/userStore.ts";
import { useEffect } from "react";
import { usePageWrapperApi } from "@/components/pageWrapper/api/usePageWrapperApi.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

// On any page were Page wrapper is a parent
// there must be a check for the current user
// or to fetch the current user
export const usePageWrapper = () => {
  const { setCurrentUser } = useUserStore();
  const { setToken } = useAccessTokenStore();
  const { userData } = usePageWrapperApi();

  useEffect(() => {
    if (userData?.user && userData?.accessToken) {
      setCurrentUser(userData.user);
      setToken(userData.accessToken);
    }
  }, [userData]);
};
