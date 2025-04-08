import {
  TAddressFormValues,
  TUserFormValues,
} from "@/modules/checkout_multiform/hooks/validations.ts";
import { create } from "zustand/index";

export type TPaymentMethod = "card" | "cash";

type TState = {
  step: number;
  user: TUserFormValues & { completed: boolean };
  address: TAddressFormValues & { completed: boolean };
  paymentMethod: { type: TPaymentMethod; completed: boolean };
  setStep: (step: number) => void;
  setPaymentMethod: (payment: {
    type: TPaymentMethod;
    completed: boolean;
  }) => void;
  setUser: (user: TUserFormValues & { completed: boolean }) => void;
  setAddress: (address: TAddressFormValues & { completed: boolean }) => void;
  clearCheckout: () => void;
};

export const useCheckoutMultiStep = create<TState>((set) => ({
  step: 1,
  user: { email: "", username: "", lastname: "", completed: false },
  address: { address: "", city: "", state: "", zip: "", completed: false },
  paymentMethod: { type: "cash", completed: false },
  clearCheckout: () =>
    set({
      step: 1,
      user: { email: "", username: "", lastname: "", completed: false },
      address: { address: "", city: "", state: "", zip: "", completed: false },
      paymentMethod: { type: "cash", completed: false },
    }),
  setPaymentMethod: (payment: { type: TPaymentMethod; completed: boolean }) =>
    set((state) => ({
      ...state,
      ...{
        paymentMethod: payment,
      },
    })),
  setStep: (step) => set((state) => ({ ...state, step })),
  setUser: (user) => set((state) => ({ ...state, user })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));
