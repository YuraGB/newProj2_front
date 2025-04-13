import useUserStore from "@/stores/userStore.ts";
import { useCallback, useRef } from "react";

export const useHeaderHook = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const closeMenuRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      closeMenuRef.current?.click();
    }, 100);
  }, [closeMenuRef]);

  const notLoggedInNav = [
    {
      navKey: "/",
      navTitle: "Home",
      component: () => import(`@/pages/HomePage`),
    },
    {
      navKey: "/login",
      navTitle: "Login in",
      component: () => import(`@/pages/Login`),
    },
    {
      navKey: "/Registration",
      navTitle: "Registration",
      component: () => import(`@/pages/Registration`),
    },
  ];

  const loggedInNav = [
    {
      navKey: "/",
      navTitle: "Home",
      component: () => import(`@/pages/HomePage`),
    },
  ];

  return {
    nav: currentUser ? loggedInNav : notLoggedInNav,
    closeMenuRef,
    handleClose,
  };
};
