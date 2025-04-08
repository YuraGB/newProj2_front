import { Swiper } from "swiper/react";

// @ts-expect-error the IDE doesn't see the import
import "swiper/css";
import { ReactNode } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// todo props set defaults to the slider options
export const Slider = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      speed={1000}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
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
