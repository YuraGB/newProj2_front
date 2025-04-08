import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { SummaryStep } from "@/modules/checkout_multiform/components/Summary.tsx";

export const UserInfoSummary = () => {
  const user = useCheckoutMultiStep((state) => state.user);

  return (
    <SummaryStep editStep={1}>
      <section className="pb-8">
        <h3 className="font-bold flex">User info summary:</h3>
        <p>{`Name: ${user.username}`}</p>
        <p>{`E-mail: ${user.email}`}</p>
      </section>
    </SummaryStep>
  );
};
