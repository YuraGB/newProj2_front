import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import { TProductBasket } from "@/types/product";
import { useBasketStore } from "@/stores/basketStore.ts";
import { toast } from "sonner";

export const useUpdateQuantityApi = () => {
  const queryClient = useQueryClient();
  const updateBasket = useBasketStore((st) => st.updateBasket);

  const {
    error: errorOnUpdate,
    mutate: onUpdateAction,
    data: updatedProduct,
    isPending: updating,
  } = useMutation({
    mutationFn: async (product: TProductBasket) => {
      const updatedProduct = await apiCall.patch<TProductBasket>("basket", {
        productId: product.productId,
        quantity: product.quantity,
      });

      return updatedProduct.data;
    },
    onSuccess: async (product: TProductBasket) => {
      toast.success("Quantity of the added product updated");

      // update to the store
      updateBasket(product);

      // revalidate minicart products
      queryClient.invalidateQueries({ queryKey: ["miniCart"] });
    },
    onError: async (error: Error) => {
      console.error(error.message);
      toast.error(`Error on save product`);
    },
  });

  return {
    onUpdateAction,
    updatedProduct,
    errorOnUpdate,
    updating,
  };
};
