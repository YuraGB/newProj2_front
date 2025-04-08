import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import useUserStore from "@/stores/userStore.ts";
import { useEffect } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";
import { TProduct } from "@/types/product";

export const useGetMiniCartProductsApi = () => {
  const queryClient = useQueryClient();
  const currentUser = useUserStore((state) => state.currentUser);
  const setProductsToBasket = useBasketStore(
    (state) => state.setProductsToBasket,
  );
  const localBasket = useBasketStore((state) => state.basket);

  const localProductIds = localBasket?.map((item) => item.productId).join(",");

  const {
    data: miniCartProducts,
    isLoading: loadingMiniCartProducts,
    error: errorProductsMiniCart,
  } = useQuery({
    queryKey: ["miniCart", localProductIds],
    queryFn: async () => {
      const response = await apiCall.get<{ products: TProduct[] | [] }>(
        // If there is no user, we will get the product ids from the local store and fetch the products
        `/products?identifier=basket&ids=${!currentUser && localProductIds?.length ? localProductIds : ""}`,
      );
      return response.data;
    },
    enabled: !!localBasket?.length,
  });

  // if the user will log in or products in the basket will change, we will update the basket
  useEffect(() => {
    if (currentUser || localBasket) {
      queryClient.invalidateQueries({ queryKey: ["miniCart"] });
    }
  }, [currentUser, queryClient, localBasket]);

  useEffect(() => {
    if (miniCartProducts && miniCartProducts?.products.length > 0) {
      setProductsToBasket(miniCartProducts.products);
    }
  }, [miniCartProducts, setProductsToBasket]);

  return { miniCartProducts, loadingMiniCartProducts, errorProductsMiniCart };
};
