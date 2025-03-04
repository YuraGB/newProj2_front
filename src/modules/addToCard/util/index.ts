import { TProductBasket } from "@/types/product";

export const findProductInBasket = (
  basket: TProductBasket[],
  itemId: TProductBasket["id"],
): TProductBasket | undefined => {
  return basket.find(({ id }) => id === itemId);
};
