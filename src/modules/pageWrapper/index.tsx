import { lazy, ReactNode } from "react";
import { Outlet } from "react-router";
import { usePageWrapper } from "@/modules/pageWrapper/hook/usePageWrapper.ts";
import { Header } from "@/components/header";

const Footer = lazy(() => import("@/components/footer"));

type TPageWrapper = {
  mainClasses?: string;
};

export const PageWrapper = ({ mainClasses }: TPageWrapper): ReactNode => {
  usePageWrapper();
  return (
    <>
      <Header />
      <main className={`${mainClasses} container mx-auto p-4 h-full`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
