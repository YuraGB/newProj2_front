import { useHPSliderApi } from "@/modules/hp_slider/api/useHPSliderApi.ts";

export const useHPSlider = () => {
  const { sliderProducts, sliderProductsDataError, loadingSliderData } =
    useHPSliderApi();

  return {
    sliderProducts,
    sliderProductsDataError,
    loadingSliderData,
  };
};
