import { ReactNode } from "react";
import { ProfileMenu } from "@/modules/profileMenu";
import { Navigation } from "@/modules/navigation";
import MiniCart from "@/modules/basket/minicart.tsx";

export const Header = (): ReactNode => {
  return (
    <header className={"shadow-md p-4"}>
      <div className={"max-w-screen-xl mx-auto w-full flex"}>
        <Navigation />
        <section className={"ml-[auto] flex items-center gap-4"}>
          <ProfileMenu />
          <MiniCart />
        </section>
      </div>
    </header>
  );
};
