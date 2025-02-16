import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import PrefetchNavLink from "@/components/prefetchNavLink";
import { useAnimatedNavigation } from "@/lib/useAnimatedNavigation.ts";
import { useHeaderHook } from "@/modules/navigation/hook/useHeaderHook.ts";

export const Navigation = (): ReactNode => {
  const { viewTransition, linkOnClickHandler } = useAnimatedNavigation();
  const { nav } = useHeaderHook();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav?.length > 0
          ? nav.map(({ navTitle, component, navKey }) => (
              <NavigationMenuItem key={navKey}>
                <PrefetchNavLink
                  key={navKey}
                  to={navKey}
                  viewTransition={viewTransition}
                  onClickAction={linkOnClickHandler(navKey)}
                  loadComponent={component}
                >
                  {navTitle}
                </PrefetchNavLink>
              </NavigationMenuItem>
            ))
          : null}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
