import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { HPSlider } from "@/modules/hp_slider";

const HomePage = (): ReactNode => {
  return (
    <article className={"page-enter"}>
      <PageTitle title={"Home page"} />
      <HPSlider />
    </article>
  );
};

export default HomePage;
