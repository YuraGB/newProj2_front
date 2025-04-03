import { useQuery } from "@tanstack/react-query";
import apiCalls from "@/lib/axiosBase.ts";
import { TOrderData } from "@/types/order";

export const useOrderSuccessApi = (orderId: number | undefined) => {
  const {
    data: orderData,
    error: orderError,
    isLoading,
  } = useQuery({
    queryKey: ["orderSuccess", orderId],
    queryFn: async () => {
      const { data } = await apiCalls.get<TOrderData>(`success/${orderId}`);
      console.log(data);
      return data;
    },
    enabled: !!orderId,
  });

  return {
    orderData,
    orderError,
    isLoading,
  };
};
