import { useMiniCartCounterApi } from "@/modules/basket/api/useMiniCartCounterApi.ts";
import { useBasketStore } from "@/stores/basketStore.ts";
import { useGetMiniCartProductsApi } from "@/modules/basket/api/useGetMinicartProductsApi.ts";

export const useMiniCart = () => {
  const { isLoading, errorBasketCounter } = useMiniCartCounterApi(); // Counter for the mini cart
  const { loadingMiniCartProducts, miniCartProducts, errorProductsMiniCart } =
    useGetMiniCartProductsApi();

  const basket = useBasketStore((st) => st.basket);

  return {
    isLoading,
    errorBasketCounter,
    loadingMiniCartProducts,
    errorProductsMiniCart,
    miniCartProducts,
    basket,
    basketCounter: basket?.length || 0,
  };
};
