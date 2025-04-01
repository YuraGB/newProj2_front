import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useCheckoutUserInfo } from "@/modules/checkout_multiform/hooks/useCheckoutUserInfo.ts";
import { Button } from "@/components/ui/button.tsx";
import { ReactNode } from "react";
import { UserInfoSummary } from "@/modules/checkout_multiform/components/user/UserInfoSummary.tsx";

export const UserInfo = (): ReactNode | null => {
  const { onSubmitUser, formUserInfo, userFormInfo, currentStep } =
    useCheckoutUserInfo();

  if (userFormInfo.completed && currentStep !== 1) {
    return <UserInfoSummary />;
  }

  if (currentStep !== 1 && !userFormInfo.completed) return null;

  return (
    <Form {...formUserInfo}>
      <form
        onSubmit={formUserInfo.handleSubmit(onSubmitUser)}
        className={`space-y-8 ${formUserInfo.formState.errors?.root ? "text-destructive" : ""}`}
      >
        <FormField
          control={formUserInfo.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formUserInfo.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formUserInfo.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type={"submit"}>submit</Button>
      </form>
    </Form>
  );
};
