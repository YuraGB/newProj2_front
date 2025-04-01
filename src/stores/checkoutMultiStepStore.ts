import {
  TAddressFormValues,
  TUserFormValues,
} from "@/modules/checkout_multiform/hooks/validations.ts";
import { create } from "zustand/index";

type TState = {
  step: number;
  user: TUserFormValues & { completed: boolean };
  address: TAddressFormValues & { completed: boolean };
  setStep: (step: number) => void;
  setUser: (user: TUserFormValues & { completed: boolean }) => void;
  setAddress: (address: TAddressFormValues & { completed: boolean }) => void;
};

export const useCheckoutMultiStep = create<TState>((set) => ({
  step: 1,
  user: { email: "", username: "", lastname: "", completed: false },
  address: { address: "", city: "", state: "", zip: "", completed: false },
  setStep: (step) => set((state) => ({ ...state, step })),
  setUser: (user) => set((state) => ({ ...state, user })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));
