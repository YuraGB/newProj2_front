import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useBasketStore } from "@/stores/basketStore.ts";
import { usePurchaseApi } from "@/modules/checkout_multiform/api/usePurchaseApi.ts";

export const usePurchase = () => {
  const navigate = useNavigate();
  const { setOrderAction } = usePurchaseApi();

  const clearCheckout = useCheckoutMultiStep((state) => state.clearCheckout);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const isCheckoutComplete = useCheckoutMultiStep(
    (state) =>
      state.user.completed &&
      state.address.completed &&
      state.paymentMethod.completed,
  );

  const handlePurchase = async () => {
    if (!isCheckoutComplete) {
      toast.error("Please complete all the steps");
      return;
    }

    try {
      const { id } = await setOrderAction();
      toast.success("Purchase completed successfully");

      clearCheckout();
      clearBasket();

      navigate(`/success/${id}`);
    } catch (error) {
      console.error("Purchase error:", error);
      toast.error("Purchase failed. Try again.");
    }
  };

  return {
    isCheckoutComplete,
    handlePurchase,
  };
};
