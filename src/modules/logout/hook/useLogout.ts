import { useLogoutApi } from "@/modules/logout/api/useLogoutApi.ts";
import { useEffect } from "react";
import useUserStore from "@/stores/userStore.ts";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const { loggedOut, errorLoggedOut, isLoading, loginOutAction } =
    useLogoutApi();
  const removeCurrentUser = useUserStore((state) => state.removeCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut && "message" in loggedOut) {
      if (loggedOut.message === "Logged out successfully") {
        removeCurrentUser();
        navigate("/");
      }
    }
  }, [loggedOut, navigate, removeCurrentUser]);

  const onLoginOutAction = () => loginOutAction();

  return {
    errorLoggedOut,
    isLoading,
    onLoginOutAction,
  };
};
