import { Swiper } from "swiper/react";

// @ts-ignore
import "swiper/css";
import { ReactNode } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Slider = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <Swiper
      spaceBetween={1}
      className={"px-2"}
      loop={true}
      injectStyles={[]}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      speed={1000}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1220: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
