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

export const ProfileMenu = (): ReactNode => {
  const { currentUser } = useUserStore();

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
      <HoverCardContent className={"w-auto flex gap-2"}>
        <Logout />
        <EditUserInfo />
      </HoverCardContent>
    </HoverCard>
  );
};
