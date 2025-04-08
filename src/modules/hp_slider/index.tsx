import { ReactNode } from "react";
import { useHPSlider } from "@/modules/hp_slider/hook/useHPSlider.ts";
import { Slider } from "@/components/slider";
import { SwiperSlide } from "swiper/react";
import { Slide } from "@/modules/hp_slider/Slide.tsx";

export const HPSlider = (): ReactNode => {
  const { sliderProducts, sliderProductsDataError, loadingSliderData } =
    useHPSlider();

  if (loadingSliderData) {
    return <article className={"p-1 relative min-h-[367px]"} />;
  }

  if (!sliderProducts?.products || sliderProductsDataError) {
    return null;
  }

  return (
    <article className={"p-1 relative w-full"}>
      <Slider>
        {sliderProducts.products.map((product) => (
          <SwiperSlide key={product.id}>
            <Slide product={product} />
          </SwiperSlide>
        ))}
      </Slider>
    </article>
  );
};
