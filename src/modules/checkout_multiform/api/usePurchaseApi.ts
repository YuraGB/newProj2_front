import { useMutation } from "@tanstack/react-query";
import apiCalls from "@/lib/axiosBase.ts";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { useBasketStore } from "@/stores/basketStore.ts";
import { TOrderData } from "@/types/order";

export const usePurchaseApi = () => {
  const { user, paymentMethod, address } = useCheckoutMultiStep();
  const basketProducts = useBasketStore((state) => state.basketProducts);

  const mutation = useMutation<TOrderData & { id: number }, Error>({
    mutationFn: async () => {
      // exclude completed from user, paymentMethod and address
      // we don't need it in the request
      const { completed: _, ...restUser } = user;
      const { completed: __, ...restPaymentMethod } = paymentMethod;
      const { completed: ___, ...restAddress } = address;

      const response = await apiCalls.post("purchase", {
        user: restUser,
        paymentMethod: restPaymentMethod,
        address: restAddress,
        products: basketProducts,
      });

      return response.data;
    },
  });

  return {
    setOrderAction: mutation.mutateAsync, // async mutation for better control
    submitedOrder: mutation.data,
    errorOnSubmitOrder: mutation.error,
    orderSubmitStatus: mutation.status,
  };
};
