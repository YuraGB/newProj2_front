import { z } from "zod";

export const FormSchema = z.object({
  type: z.enum(["card", "cash"], {
    required_error: "You need to select a payment method.",
  }),
});
