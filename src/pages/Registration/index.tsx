import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { RegisterForm } from "@/modules/register";

const Registration = (): ReactNode => {
  return (
    <article className={"flex flex-wrap flex-col max-w-md m-auto"}>
      <PageTitle title={"Register"} />
      <RegisterForm />
    </article>
  );
};

export default Registration;
