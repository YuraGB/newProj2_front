import apiCall from "@/lib/axiosBase.ts";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "@/stores/userStore.ts";
import { TProductBasket } from "@/types/product";
import { useEffect } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";
import { useMergeBasketsApi } from "@/modules/basket/api/useMergeBasketsApi.ts";

export const useMiniCartCounterApi = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const mergeLocalBasket = useBasketStore((state) => state.mergeBasket);
  const localBasket = useBasketStore((state) => state.basket);
  const { mergeShoppingCart, updatingShoppingCart } = useMergeBasketsApi();

  const {
    data: basketCounter,
    isLoading: loadingBasketCounter,
    error: errorBasketCounter,
  } = useQuery({
    queryKey: ["miniCartCounter"],
    queryFn: async () => {
      const { data } = await apiCall.get<{ basket: TProductBasket[] }>(
        "/basket",
      );
      return data;
    },
    enabled: !!currentUser,
  });

  useEffect(() => {
    if (basketCounter && basketCounter?.basket.length !== 0) {
      mergeLocalBasket(basketCounter.basket);

      // if there were added products before login
      // update users basket on the server
      mergeShoppingCart(localBasket);
    }
  }, [basketCounter]);

  return {
    basketCounter,
    isLoading: loadingBasketCounter || updatingShoppingCart,
    errorBasketCounter,
  };
};
