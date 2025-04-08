import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/types/product";
import apiCalls from "@/lib/axiosBase.ts";

export const useGetCategoryProductsApi = (categoryName?: string) => {
  const {
    data: categoryProducts,
    error: errorCategoryProducts,
    isLoading: loadingProducts,
  } = useQuery({
    queryKey: ["categoryProducts", categoryName],
    queryFn: async () => {
      const { data } = await apiCalls.get<TProduct[]>(
        `category/${categoryName}`,
      );
      return data;
    },
    enabled: !!categoryName,
  });

  return {
    categoryProducts,
    errorCategoryProducts,
    loadingProducts,
  };
};
