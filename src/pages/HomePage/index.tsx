import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { Register } from "@/modules/register";
import { Login } from "@/modules/login";

export const HomePage = (): ReactNode => {
  return (
    <>
      <PageTitle title={"Login"} />
      <Login />
      <Register />
    </>
  );
};
