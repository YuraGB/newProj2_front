import { ReactNode } from "react";
import { Button } from "@/components/ui/button.tsx";
import { useLogout } from "@/modules/logout/hook/useLogout.ts";

export const Logout = (): ReactNode => {
  const { onLoginOutAction } = useLogout();
  return <Button onClick={onLoginOutAction}>Log out</Button>;
};
