import { TProductBasket } from "@/types/product";

export const findProductInBasket = (
  basket: TProductBasket[],
  itemId: TProductBasket["productId"],
): TProductBasket | undefined => {
  return basket.find(({ productId }) => productId === itemId);
};
