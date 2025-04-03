import { ReactNode } from "react";
import { useOrderSuccess } from "@/modules/orderSuccess/hook";

export const OrderSuccess = (): ReactNode => {
  const { orderData, orderError, isLoading } = useOrderSuccess();
  console.log("bjkhkjhkh");
  if (orderError) return null;
  if (isLoading) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Order Success</h1>
      <p className="mt-4">Thank you for your order!</p>
      <pre className="mt-4">{JSON.stringify(orderData, null, 2)}</pre>
    </div>
  );
};
