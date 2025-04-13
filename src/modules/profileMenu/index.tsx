import { ReactNode } from "react";
import { CircleUserRound } from "lucide-react";
import { Avatar } from "@/components/ui/avatar.tsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import { Logout } from "@/modules/logout";
import useUserStore from "@/stores/userStore.ts";
import { EditUserInfo } from "@/modules/editUserInfo";
import defaultStyles from "@/modules/profileMenu/avatar.module.css";
import PrefetchNavLink from "@/components/prefetchNavLink";

export const ProfileMenu = (): ReactNode => {
  const currentUser = useUserStore((state) => state.currentUser);
  if (!currentUser) return null;

  return (
    <HoverCard openDelay={100} closeDelay={500}>
      <HoverCardTrigger className={"inline-flex ml-[auto]"}>
        <Avatar
          className={`my-2 hover:cursor-pointer h-[32px] w-[32px] ${defaultStyles.wave_container}`}
        >
          <CircleUserRound size={32} className={`text-gray-800`} />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className={"w-auto flex flex-col gap-2"}>
        <PrefetchNavLink
          to={"/profile"}
          additionalClasses={"bg-transparent cursor-pointer hover:underline"}
          loadComponent={() => import("@/pages/Profile")}
        >
          <span className={"text-gray-800 block relative"}> Profile page</span>
        </PrefetchNavLink>
        <div className={"flex gap-2"}>
          <Logout />
          <EditUserInfo />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
