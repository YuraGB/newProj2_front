import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { SummaryStep } from "@/modules/checkout_multiform/components/Summary.tsx";

export const PaymentMethodSummary = () => {
  const paymentMethod = useCheckoutMultiStep((state) => state.paymentMethod);

  return (
    <SummaryStep editStep={3}>
      <section className="pb-8">
        <h3 className="font-bold flex">Payment method summary:</h3>
        <p>{`Payment method: ${paymentMethod.type}`}</p>
      </section>
    </SummaryStep>
  );
};
