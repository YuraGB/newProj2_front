import { ReactNode } from "react";
import { Outlet } from "react-router";

export const Protected = (): ReactNode => {
  return <Outlet />;
};
