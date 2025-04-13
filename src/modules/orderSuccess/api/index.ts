import { useQuery } from "@tanstack/react-query";
import apiCalls from "@/lib/axiosBase.ts";
import { TOrder } from "@/types/order";

export const useOrderSuccessApi = (orderId: number | undefined) => {
  const {
    data: orderData,
    error: orderError,
    isLoading,
  } = useQuery({
    queryKey: ["orderSuccess", orderId],
    queryFn: async () => {
      const { data } = await apiCalls.get<TOrder>(`success/${orderId}`);
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
