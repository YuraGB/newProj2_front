import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/modules/checkout_multiform/hooks/validation.ts";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";

export const usePaymentMethods = () => {
  const setPaymentMethods = useCheckoutMultiStep(
    (state) => state.setPaymentMethod,
  );
  const setStep = useCheckoutMultiStep((state) => state.setStep);
  const currentStep = useCheckoutMultiStep((state) => state.step);
  const isCompleted = useCheckoutMultiStep(
    (state) => state.paymentMethod.completed,
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setPaymentMethods({ type: data.type, completed: true });
    setStep(4);
  }

  return {
    form,
    onSubmit,
    currentStep,
    isCompleted,
  };
};
