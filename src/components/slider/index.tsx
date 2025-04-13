import { Swiper } from "swiper/react";
import { ReactNode } from "react";

// @ts-expect-error the IDE doesn't see the import
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useSlider } from "@/components/slider/useSlider.ts";

export type TSliderProps = {
  spaceBetween?: number;
  loop?: boolean;
  navigation?: boolean;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
  speed?: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
};

export const Slider = (props: {
  children: ReactNode;
  sliderOptions?: TSliderProps;
}): ReactNode => {
  const {
    enabled,
    autoplay,
    loop,
    navigation,
    spaceBetween,
    speed,
    breakpoints,
    containerRef,
  } = useSlider(props);

  return (
    <div ref={containerRef}>
      <Swiper
        spaceBetween={spaceBetween}
        loop={enabled && loop}
        navigation={navigation}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={enabled ? autoplay : false}
        speed={speed}
        breakpoints={breakpoints}
      >
        {props.children}
      </Swiper>
    </div>
  );
};
