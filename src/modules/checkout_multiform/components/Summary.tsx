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
    <section className="pb-8 flex max-w-[700px] items-center mx-[auto] my-[40px] rounded border p-4 grid grid-cols-2 gap-4">
      <Button className="mr-[auto]" onClick={() => setStep(editStep)}>
        Edit
      </Button>
      {children}
    </section>
  );
};
