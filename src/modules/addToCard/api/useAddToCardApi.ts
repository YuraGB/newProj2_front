import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import { TProductBasket } from "@/types/product";
import { useBasketStore } from "@/stores/basketStore.ts";
import { toast } from "sonner";

export const useAddToCardApi = () => {
  const queryClient = useQueryClient();
  const addToBasket = useBasketStore((st) => st.addToBasket);
  const basket = useBasketStore((st) => st.basket);

  const {
    error: errorOnSave,
    mutate: onSaveAction,
    data: savedProduct,
    isPending: saving,
  } = useMutation({
    mutationFn: async (product: TProductBasket) => {
      const savedProduct = await apiCall.post<TProductBasket>(
        "basket",
        product,
      );

      return savedProduct.data;
    },
    onSuccess: async (product: TProductBasket) => {
      // add to the store
      addToBasket(product);

      const updatedIds = [
        ...basket.map((p) => p.productId),
        product.productId,
      ].join(",");

      // revalidate minicart products
      queryClient.refetchQueries({ queryKey: ["miniCart", updatedIds] });
    },
    onError: async (error: Error) => {
      console.error(error.message);
      toast.error(`Error on save product`);
    },
  });

  return {
    errorOnSave,
    onSaveAction,
    savedProduct,
    saving,
  };
};
