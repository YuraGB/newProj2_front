import { useOrderSuccessApi } from "@/modules/orderSuccess/api";
import { useParams } from "react-router";

export const useOrderSuccess = () => {
  const { orderId } = useParams();
  console.log("orderId", orderId);
  const { orderData, orderError, isLoading } = useOrderSuccessApi(
    Number(orderId),
  );
  return { orderData, orderError, isLoading };
};
