import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { LoginForm } from "@/modules/login";

const Login = (): ReactNode => {
  return (
    <article className={"flex flex-wrap flex-col max-w-md m-auto"}>
      <PageTitle title={"Login"} />
      <LoginForm />
    </article>
  );
};

export default Login;
