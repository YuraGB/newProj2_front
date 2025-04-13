import { NavLink } from "react-router";
import { ReactNode, SyntheticEvent, useState } from "react";

const PrefetchNavLink = ({
  to,
  children,
  loadComponent,
  additionalClasses,
  viewTransition = false,
  onClickAction,
}: {
  to: string;
  children: ReactNode | string;
  loadComponent: () => Promise<unknown>;
  onClickAction?: (e: SyntheticEvent) => void;
  additionalClasses?: string;
  viewTransition?: boolean;
}): ReactNode => {
  const [prefetched, setPrefetched] = useState(false);

  const handlePrefetch = () => {
    if (!prefetched) {
      loadComponent();
      setPrefetched(true);
    }
  };

  const clickHandler = (e: SyntheticEvent) => {
    if (onClickAction) {
      return onClickAction(e);
    } else {
      return;
    }
  };

  return (
    <NavLink
      to={to}
      onMouseEnter={handlePrefetch}
      viewTransition={viewTransition}
      onClick={clickHandler}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? `active bg-accent px-1 bg-transparent ${additionalClasses} cursor-pointer`
            : `px-1 bg-accent-base hover:bg-transparent ${additionalClasses} cursor-pointer`
      }
    >
      {children}
    </NavLink>
  );
};

export default PrefetchNavLink;
