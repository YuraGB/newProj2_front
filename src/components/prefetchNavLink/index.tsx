import { NavLink } from "react-router";
import { ReactNode, SyntheticEvent, useState } from "react";

const PrefetchNavLink = ({
  to,
  children,
  loadComponent,
  viewTransition = false,
  onClickAction,
}: {
  to: string;
  children: ReactNode | string;
  loadComponent: () => Promise<unknown>;
  onClickAction?: (e: SyntheticEvent) => void;
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
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default PrefetchNavLink;
