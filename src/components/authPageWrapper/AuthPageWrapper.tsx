import { ReactNode } from "react";
import useUserStore from "@/stores/userStore.ts";
import { Navigate, Outlet } from "react-router";

// Logged-in user shouldn't get to the /login or /registration pages
// The user should log out first
// Otherwise the user should be redirected to the /profile page
export const AuthPageWrapper = (): ReactNode => {
  const { currentUser } = useUserStore();

  if (currentUser) {
    return <Navigate to={"/profile"} />;
  }

  return <Outlet />;
};
