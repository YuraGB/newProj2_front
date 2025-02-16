import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type TEditUser = z.infer<typeof formSchema>;
