import useUserStore from "@/stores/userStore.ts";

export const useHeaderHook = () => {
  const { currentUser } = useUserStore();
  const notLoggedInNav = [
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
      navKey: "/Profile",
      navTitle: "Profile",
      component: () => import(`@/pages/Profile`),
    },
  ];

  return { nav: currentUser ? loggedInNav : notLoggedInNav };
};
