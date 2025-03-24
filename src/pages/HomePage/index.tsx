import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { HPSlider } from "@/modules/hp_slider";
import DashPlayer from "@/modules/dashPlayer";
import { Posts } from "@/modules/hp_posts";

const HomePage = (): ReactNode => {
  return (
    <article className={"page-enter"}>
      <PageTitle title={"Home page"} />
      <HPSlider />
      <Posts />
      <DashPlayer src="https://localhost:3000/api/v1/videos/manifest.mpd" />
    </article>
  );
};

export default HomePage;
