import { useMutation } from "@tanstack/react-query";
import { TProductBasket } from "@/types/product";
import apiCall from "@/lib/axiosBase.ts";
import { toast } from "sonner";

export const useMergeBasketsApi = () => {
  const {
    mutate: mergeShoppingCart,
    error: errorOnMergingCart,
    isPending: updatingShoppingCart,
  } = useMutation({
    mutationFn: async (basket: TProductBasket[]) =>
      await apiCall.post("mergeBaskets", basket),
    onSuccess: async () => {
      toast.success("the shopping cart successfully updated.");
    },
    onError: () => toast.error("Error updating shopping cart."),
  });

  return {
    mergeShoppingCart,
    errorOnMergingCart,
    updatingShoppingCart,
  };
};
