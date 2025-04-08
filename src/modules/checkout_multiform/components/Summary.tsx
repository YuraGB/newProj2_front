import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";
import { Button } from "@/components/ui/button.tsx";
import { ReactNode } from "react";

export const SummaryStep = ({
  editStep,
  children,
}: {
  editStep: number;
  children: ReactNode;
}): ReactNode => {
  const setStep = useCheckoutMultiStep((state) => state.setStep);

  return (
    <section className="pb-8 flex max-w-[700px] items-center mx-[auto] my-[40px] rounded border p-2 grid md:auto-cols-max gap-4 grid-flow-col">
      <Button className="mr-[auto]]" onClick={() => setStep(editStep)}>
        Edit
      </Button>
      {children}
    </section>
  );
};
