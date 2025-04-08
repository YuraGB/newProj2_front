import { useQuery } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import { TProduct } from "@/types/product";

export const useProductApi = (productId: number | undefined) => {
  const {
    data: productData,
    error: productError,
    isLoading: productLoading,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await apiCall.get<{ product: TProduct }>(
        `/products/${productId}`,
      );
      return data;
    },
    enabled: !!productId,
  });

  return {
    productData,
    productError,
    productLoading,
  };
};
