import { z } from "zod";

export const userInfoFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export type TUserFormValues = z.infer<typeof userInfoFormSchema>;

export const addressFormSchema = z.object({
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  zip: z.string().min(5, {
    message: "Zip code must be at least 5 characters.",
  }),
});

export type TAddressFormValues = z.infer<typeof addressFormSchema>;
