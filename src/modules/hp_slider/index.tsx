import { ReactNode } from "react";
import { useHPSlider } from "@/modules/hp_slider/hook/useHPSlider.ts";
import { Slider } from "@/components/slider";
import { SwiperSlide } from "swiper/react";

export const HPSlider = (): ReactNode => {
  const { sliderProducts, sliderProductsDataError, loadingSliderData } =
    useHPSlider();

  if (!sliderProducts || sliderProductsDataError || loadingSliderData) {
    return null;
  }

  return (
    <article className={"p-1 relative"}>
      <Slider>
        {sliderProducts.products.map((product) => (
          <SwiperSlide key={product.id}>
            <section className={"shadow-md flex flex-col m-4"}>
              <img
                title={product.title}
                loading={"eager"}
                src={product.thumbnail}
                alt={`image of ${product.title}`}
              />
              <section className={"p-2 mb-2"}>
                <h2>{product.title}</h2>
              </section>
            </section>
          </SwiperSlide>
        ))}
      </Slider>
    </article>
  );
};
