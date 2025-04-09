import { ReactNode } from "react";
import MiniCart from "@/modules/basket/minicart.tsx";
import { SkeletonNavigation } from "@/modules/navigation/SkeletonNavigation.tsx";
import { SkeletonProfileMenu } from "@/modules/profileMenu/SkeletonProfile.tsx";

export const HeaderSkeleton = (): ReactNode => {
  return (
    <header className={"shadow-md p-4"}>
      <div className={"max-w-screen-xl mx-auto w-full flex"}>
        <SkeletonNavigation />
        <section className={"ml-[auto] flex items-center gap-4"}>
          <SkeletonProfileMenu />
          <MiniCart />
        </section>
      </div>
    </header>
  );
};
