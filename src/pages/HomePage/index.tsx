import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";

const HomePage = (): ReactNode => {
  return (
    <article className={"page-enter"}>
      <PageTitle title={"Home page"} />
    </article>
  );
};

export default HomePage;
