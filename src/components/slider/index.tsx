import { Swiper } from "swiper/react";

// @ts-ignore
import "swiper/css";
import { ReactNode } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Slider = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={5}
      className={"px-2"}
      loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      speed={1000}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};
