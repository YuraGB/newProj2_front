import { ReactNode } from "react";
import { useProfile } from "@/modules/profile/hook/useProfile.ts";

export const ProfileComponent = (): ReactNode => {
  const { profileData, loadingProfile, errorProfileData } = useProfile();
  console.log(profileData, loadingProfile, errorProfileData);
  return (
    <article>
      <h2>{profileData?.userName}</h2>
    </article>
  );
};
