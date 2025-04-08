import useUserStore from "@/stores/userStore.ts";
import { useEffect } from "react";
import { usePageWrapperApi } from "@/modules/pageWrapper/api/usePageWrapperApi.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";
import { useFetchBasket } from "@/modules/pageWrapper/hook/useFetchBasket.ts";

// On any page where Page wrapper is a parent
// there must be a check for the current user
// or to fetch the current user
// and to fetch the current user's basket
export const usePageWrapper = () => {
  const { setCurrentUser } = useUserStore();

  const { setToken } = useAccessTokenStore();
  const { userData } = usePageWrapperApi();

  useEffect(() => {
    if (userData?.user && userData?.accessToken) {
      setCurrentUser(userData.user);
      setToken(userData.accessToken);
    }
  }, [userData, setCurrentUser, setToken]);

  useFetchBasket();
};
