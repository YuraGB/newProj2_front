import { z } from "zod";
import {
  TAddressFormValues,
  TUserFormValues,
} from "@/modules/checkout_multiform/hooks/validations.ts";
import { TPaymentMethod } from "@/stores/checkoutMultiStepStore.ts";

export const TProductOrder = z.object({
  thumbnail: z.string().url(),
  id: z.number(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export type TOrderData = {
  user: TUserFormValues;
  address: TAddressFormValues;
  paymentMethod: { type: TPaymentMethod };
  products: z.infer<typeof TProductOrder>[];
};

export type TOrderStore = {
  order: (TOrderData & { id: number }) | "";
  setOrderData: (orderData: TOrderData) => void;
};

export type TOrder = {
  address: TAddressFormValues["address"];
  city: TAddressFormValues["city"];
  createdAt: string;
  email: string;
  id: number;
  lastname: string;
  paymentType: TPaymentMethod;
  products: z.infer<typeof TProductOrder>[];
  state: TAddressFormValues["state"];
  userId: number;
  username: string;
  zip: TAddressFormValues["zip"];
};
