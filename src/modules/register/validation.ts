import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type TRegisterFormValues = z.infer<typeof formSchema>;
