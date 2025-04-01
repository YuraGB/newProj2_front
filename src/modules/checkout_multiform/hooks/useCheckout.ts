import { useState } from "react";
import {
  TAddressFormValues,
  TUserFormValues,
} from "@/modules/checkout_multiform/hooks/validations.ts";

type TState = {
  step: number;
  user: TUserFormValues & { completed: boolean };
  address: TAddressFormValues & { completed: boolean };
};

export const useCheckout = () => {
  const [multiformStates, setCheckoutState] = useState<TState>({
    step: 1,
    user: { email: "", username: "", lastname: "", completed: false },
    address: { address: "", city: "", state: "", zip: "", completed: false },
  });

  const onSubmitUser = (vals: TUserFormValues) => {
    setCheckoutState((state) => ({
      ...state,
      user: { ...vals, completed: true },
      step: 2, // Автоматично переходимо до наступного степу
    }));
  };

  const goToStep = (step: number) => {
    setCheckoutState((state) => {
      const allowedSteps = [1];

      if (state.user.completed) allowedSteps.push(2);
      if (state.address.completed) allowedSteps.push(3);

      return allowedSteps.includes(step) ? { ...state, step } : state;
    });
  };

  const onSubmitAddress = (vals: TAddressFormValues) => {
    setCheckoutState((state) => ({
      ...state,
      address: { ...vals, completed: true },
      step: 3,
    }));
  };

  return {
    multiformStates,
    onSubmitUser,
    onSubmitAddress,
    goToStep,
  };
};
