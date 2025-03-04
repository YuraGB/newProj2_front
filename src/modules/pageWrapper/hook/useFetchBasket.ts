import { useQuery } from "@tanstack/react-query";
import useUserStore from "@/stores/userStore.ts";
import apiCall from "@/lib/axiosBase.ts";
import { TProductBasket } from "@/types/product";
import { useEffect } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";

export const useFetchBasket = () => {
  const { currentUser } = useUserStore();
  const { mergeBasket } = useBasketStore();

  const {
    data: basketData,
    error: errorBasket,
    isLoading: loadingBasket,
  } = useQuery({
    queryKey: ["basket", currentUser?.id],
    queryFn: async () => {
      const { data } = await apiCall.get<{ basket: TProductBasket[] }>(
        `/basket/${currentUser?.id}`,
      );
      return data;
    },
    enabled: !!currentUser,
  });

  useEffect(() => {
    if (basketData?.basket?.length) {
      mergeBasket(basketData.basket);
    }
  }, [basketData]);

  return {
    basketData,
    errorBasket,
    loadingBasket,
  };
};
