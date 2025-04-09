import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const SkeletonNavigation = (): ReactNode => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Skeleton className={"w-13 mx-2 h-3"} />
        <Skeleton className={"w-18 mx-2 h-3"} />
        <Skeleton className={"w-25 mx-2 h-3"} />
        <NavigationMenuItem>
          <Skeleton className={"w-25 mx-2 h-3"} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
