import { lazy, ReactNode, Suspense } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.tsx";
import PrefetchNavLink from "@/components/prefetchNavLink";
import { useAnimatedNavigation } from "@/lib/useAnimatedNavigation.ts";
import { useHeaderHook } from "@/modules/navigation/hook/useHeaderHook.ts";

const CategoriesMenu = lazy(() => import("@/modules/categoriesMenu"));

export const Navigation = (): ReactNode => {
  const { viewTransition, linkOnClickHandler } = useAnimatedNavigation();
  const { nav, handleClose, closeMenuRef } = useHeaderHook();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav?.length > 0
          ? nav.map(({ navTitle, component, navKey }) => (
              <NavigationMenuItem key={navKey} className={"mx-2"}>
                <PrefetchNavLink
                  key={navKey}
                  to={navKey}
                  viewTransition={viewTransition}
                  onClickAction={linkOnClickHandler(navKey)}
                  loadComponent={component}
                >
                  <span className={"font-bold text-gray-800 border-b-2"}>
                    {navTitle}
                  </span>
                </PrefetchNavLink>
              </NavigationMenuItem>
            ))
          : null}
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={closeMenuRef}>
            Category-list
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Suspense fallback={null}>
              <CategoriesMenu onClose={handleClose} />
            </Suspense>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
