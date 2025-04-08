import { create } from "zustand";
import { TProduct, TProductBasket } from "@/types/product";
// import { persist } from "zustand/middleware";

interface IBasketStore {
  basket: TProductBasket[];
  basketProducts: Array<TProduct & { quantity: number }>;
  addToBasket: (item: TProductBasket) => void;
  mergeBasket: (serverBasket: TProductBasket[]) => void;
  setProductsToBasket: (products: TProduct[]) => void;
  updateBasket: (item: TProductBasket) => void;
  removeFromBasket: (item: TProductBasket) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<IBasketStore>((set, get) => ({
  basket: [],
  basketProducts: [],

  setProductsToBasket: (products: TProduct[]) => {
    set((state) => {
      const basket = get().basket;
      const prodMap = new Map<number, number>();

      basket.forEach((item) => prodMap.set(item.productId, item.quantity));

      return {
        ...state,
        basketProducts: products.map((product) => ({
          ...product,
          quantity: prodMap.get(product.id) ?? 1,
        })),
      };
    });
  },

  clearBasket: () => {
    set(() => ({
      basket: [],
      basketProducts: [],
    }));
  },

  mergeBasket: (serverBasket) => {
    const state = get();
    const productMap = new Map<number, TProductBasket>();

    state.basket.forEach((item) => productMap.set(item.productId, item));

    serverBasket.forEach((item) => {
      if (productMap.has(item.productId)) {
        productMap.get(item.productId)!.quantity = item.quantity;
      } else {
        productMap.set(item.productId, item);
      }
    });

    const newBasket = Array.from(productMap.values());

    if (JSON.stringify(state.basket) !== JSON.stringify(newBasket)) {
      set({ basket: newBasket });
    }
  },

  addToBasket: (item: TProductBasket) => {
    set((state) => {
      const existingItem = state.basket.find(
        (i) => i.productId === item.productId,
      );

      if (existingItem) {
        return {
          basket: state.basket.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }

      return {
        basket: [...state.basket, item],
      };
    });
  },

  updateBasket: (item: TProductBasket) => {
    set((state) => {
      return {
        basket: updatedBasketProducts(state.basket, item),
        basketProducts: state.basketProducts.map((p) =>
          p.id === item.productId ? { ...p, quantity: item.quantity } : p,
        ),
      };
    });
  },

  removeFromBasket: (item: TProductBasket) => {
    set((state) => ({
      basket: state.basket.filter((i) => i.productId !== item.productId),
    }));
  },
}));

const updatedBasketProducts = <T extends { id?: number; productId?: number }>(
  products: T[],
  item: T,
): T[] =>
  products.map((i) => {
    const isMatch =
      (i.id !== undefined && i.id === item.id) ||
      (i.productId !== undefined && i.productId === item.productId);

    return isMatch ? { ...i, ...item } : i;
  });
