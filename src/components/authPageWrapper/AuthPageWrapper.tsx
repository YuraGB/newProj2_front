import { ReactNode } from "react";
import useUserStore from "@/stores/userStore.ts";
import { Navigate, Outlet } from "react-router";

export const AuthPageWrapper = (): ReactNode => {
  const { currentUser } = useUserStore();

  if (currentUser) {
    return <Navigate to={"/profile"} />;
  }

  return <Outlet />;
};
