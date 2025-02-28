import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axiosBase.ts";
import { THPProductsSlider } from "@/types/product";

type HPProdSloder = {
  products: THPProductsSlider[] | [];
};
export const useHPSliderApi = () => {
  const {
    data: sliderProducts,
    error: sliderProductsDataError,
    isLoading: loadingSliderData,
  } = useQuery({
    queryKey: ["hp_slider"],
    queryFn: async () => {
      const resp = await apiClient.get<HPProdSloder>(
        "/products?identifier=home",
      );
      return resp.data;
    },
  });

  return {
    sliderProducts,
    sliderProductsDataError,
    loadingSliderData,
  };
};
