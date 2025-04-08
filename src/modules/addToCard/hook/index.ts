import { TProductBasket } from "@/types/product";
import { useBasketStore } from "@/stores/basketStore.ts";
import { findProductInBasket } from "@/modules/addToCard/util";
import { useAddToCardApi } from "@/modules/addToCard/api/useAddToCardApi.ts";
import useUserStore from "@/stores/userStore.ts";
import { useUpdateQuantityApi } from "@/modules/addToCard/api/useUpdateQuantityApi.ts";

export const useAddToCard = () => {
  const { addToBasket, basket, updateBasket } = useBasketStore();
  const currentUser = useUserStore((state) => state.currentUser);
  const { onUpdateAction, updating } = useUpdateQuantityApi();
  const { onSaveAction, saving } = useAddToCardApi();

  const handleAction = (product: TProductBasket, isUpdating: boolean) => {
    const action = currentUser
      ? isUpdating
        ? onUpdateAction
        : onSaveAction
      : isUpdating
        ? updateBasket
        : addToBasket;

    const quantity =
      findProductInBasket(basket, product.productId)?.quantity || 0;

    action({ ...product, quantity: isUpdating ? quantity + 1 : 1 });
  };

  const addToCardAction = (product: TProductBasket) => {
    handleAction(
      product,
      Boolean(findProductInBasket(basket, product.productId)),
    );
  };

  return {
    addToCardAction,
    isLoading: saving || updating,
  };
};
