import { SyntheticEvent } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router";

export const useAnimatedNavigation = () => {
  const navigate = useNavigate();

  const linkOnClickHandler = (navigateTo: string) => (ev: SyntheticEvent) => {
    ev.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(navigateTo);
      });
    });
  };

  return {
    linkOnClickHandler,
    viewTransition: true, // property fo <Link... on <NavLink...
  };
};
