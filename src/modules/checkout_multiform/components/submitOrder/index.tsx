import { Button } from "@/components/ui/button.tsx";
import { usePurchase } from "@/modules/checkout_multiform/hooks/usePurchase.ts";

const SubmitOrder = () => {
  const { isCheckoutComplete, handlePurchase } = usePurchase();

  if (!isCheckoutComplete) {
    return null;
  }

  return (
    <Button type={"button"} onClick={handlePurchase}>
      Purchase
    </Button>
  );
};

export default SubmitOrder;
