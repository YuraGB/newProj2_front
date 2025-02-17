import { ReactNode } from "react";
import { useProfile } from "@/modules/profile/hook/useProfile.ts";
import { PageTitle } from "@/components/pageTitle";

export const ProfileComponent = (): ReactNode => {
  const { currentUser, loadingProfile } = useProfile();

  return (
    <>
      <PageTitle title={"Profile"} />
      <article>
        <h2>{loadingProfile ? "Loading" : currentUser?.userName}</h2>
      </article>
    </>
  );
};
