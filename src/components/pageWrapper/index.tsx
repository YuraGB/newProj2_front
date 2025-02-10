import { ReactNode } from "react";
import { Outlet } from "react-router";

export const PageWrapper = (): ReactNode => {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  );
};
