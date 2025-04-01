import { useCheckoutAddress } from "@/modules/checkout_multiform/hooks/useCheckoutAddress.tsx";
import {
  FormControl,
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ReactNode } from "react";
import { AddressInfoSummary } from "@/modules/checkout_multiform/components/address/AddressInfoSummary.tsx";

export const AddressInfo = (): ReactNode => {
  const { formAddressInfo, onSubmitAddress, checkoutAddress, currentStep } =
    useCheckoutAddress();

  if (currentStep !== 2 && checkoutAddress.completed) {
    return <AddressInfoSummary />;
  }

  if (currentStep !== 2 && !checkoutAddress.completed) {
    return null;
  }

  return (
    <Form {...formAddressInfo}>
      <form
        onSubmit={formAddressInfo.handleSubmit(onSubmitAddress)}
        className={`space-y-8 ${formAddressInfo.formState.errors?.root ? "text-destructive" : ""}`}
      >
        <FormField
          control={formAddressInfo.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formAddressInfo.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formAddressInfo.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip</FormLabel>
              <FormControl>
                <Input placeholder="zip" type={"number"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formAddressInfo.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
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
