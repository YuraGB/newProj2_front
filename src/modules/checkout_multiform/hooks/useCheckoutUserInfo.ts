import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TUserFormValues,
  userInfoFormSchema,
} from "@/modules/checkout_multiform/hooks/validations.ts";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";

const defaultValues = {
  email: "",
  lastname: "",
  username: "",
};

export const useCheckoutUserInfo = () => {
  const userFormInfo = useCheckoutMultiStep((state) => state.user);
  const setCheckoutState = useCheckoutMultiStep((state) => state.setUser);
  const setStep = useCheckoutMultiStep((state) => state.setStep);
  const currentStep = useCheckoutMultiStep((state) => state.step);

  const formUserInfo = useForm<TUserFormValues>({
    resolver: zodResolver(userInfoFormSchema),
    defaultValues,
  });

  const onSubmitUser = (vals: TUserFormValues) => {
    setCheckoutState({ ...vals, completed: true });
    setStep(2);
  };

  return {
    onSubmitUser,
    formUserInfo,
    userFormInfo,
    currentStep,
  };
};

export type TCheckoutUserInfo = ReturnType<typeof useCheckoutUserInfo>;
