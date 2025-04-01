import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { SummaryStep } from "@/modules/checkout_multiform/components/Summary.tsx";

export const AddressInfoSummary = () => {
  const address = useCheckoutMultiStep((state) => state.address);

  return (
    <SummaryStep editStep={2}>
      <section className="pb-8 ">
        <h3 className="font-bold flex">Address info summary:</h3>
        <p>{`Address: ${address.address}`}</p>
        <p>{`State: ${address.state}`}</p>
        <p>{`Zip: ${address.zip}`}</p>
        <p>{`City: ${address.city}`}</p>
      </section>
    </SummaryStep>
  );
};
