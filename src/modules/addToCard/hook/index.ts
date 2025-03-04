import { TProduct } from "@/types/product";
import { useBasketStore } from "@/stores/basketStore.ts";
import { findProductInBasket } from "@/modules/addToCard/util";

export const useAddToCard = () => {
  const { addToBasket, basket, updateBasket } = useBasketStore();
  const addToCardAction = (product: TProduct) => {
    const itemInBasket = findProductInBasket(basket, product.id);
    if (itemInBasket) {
      updateBasket({
        ...product,
        quantity: itemInBasket.quantity + 1,
      });
    } else {
      addToBasket({
        ...product,
        quantity: 1,
      });
    }
  };

  return {
    addToCardAction,
  };
};
