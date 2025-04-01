import { useForm } from "react-hook-form";
import {
  addressFormSchema,
  TAddressFormValues,
} from "@/modules/checkout_multiform/hooks/validations.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";

const defaultValues = {
  address: "",
  city: "",
  state: "",
  zip: "",
};
export const useCheckoutAddress = () => {
  const checkoutAddress = useCheckoutMultiStep((state) => state.address);
  const setAddress = useCheckoutMultiStep((state) => state.setAddress);
  const setStep = useCheckoutMultiStep((state) => state.setStep);
  const currentStep = useCheckoutMultiStep((state) => state.step);

  const formAddressInfo = useForm<TAddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues,
  });

  const onSubmitAddress = (vals: TAddressFormValues) => {
    setAddress({ ...vals, completed: true });
    setStep(3);
  };

  return {
    formAddressInfo,
    onSubmitAddress,
    checkoutAddress,
    currentStep,
  };
};

export type TCheckoutAddress = ReturnType<typeof useCheckoutAddress>;
