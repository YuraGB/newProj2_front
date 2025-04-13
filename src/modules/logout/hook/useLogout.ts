import { useLogoutApi } from "@/modules/logout/api/useLogoutApi.ts";
import useUserStore from "@/stores/userStore.ts";
import { useNavigate } from "react-router";
import { useBasketStore } from "@/stores/basketStore.ts";
import useAccessTokenStore from "@/stores/accessTokenStore.ts";

export const useLogout = () => {
  const { errorLoggedOut, isLoading, loginOutAction } = useLogoutApi();
  const removeCurrentUser = useUserStore((state) => state.removeCurrentUser);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const clearToken = useAccessTokenStore((state) => state.clearToken);
  const navigate = useNavigate();

  const onLoginOutAction = () => {
    navigate("/");
    removeCurrentUser();
    clearBasket();
    clearToken();
    loginOutAction();
  };

  return {
    errorLoggedOut,
    isLoading,
    onLoginOutAction,
  };
};
