import { ReactNode } from "react";
import { ProfileMenu } from "@/modules/profileMenu";
import { Navigation } from "@/modules/navigation";

export const Header = (): ReactNode => {
  return (
    <header className={"shadow-md p-4 flex"}>
      <Navigation />
      <ProfileMenu />
    </header>
  );
};
