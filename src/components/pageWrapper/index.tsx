import { ReactNode } from "react";
import { Outlet } from "react-router";
import { usePageWrapper } from "@/components/pageWrapper/hook/usePageWrapper.ts";
import { Header } from "@/components/header";

type TPageWrapper = {
  mainClasses?: string;
};

export const PageWrapper = ({ mainClasses }: TPageWrapper): ReactNode => {
  usePageWrapper();
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className={mainClasses}>
        <Outlet />
      </main>
    </div>
  );
};
