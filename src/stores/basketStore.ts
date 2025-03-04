import { create } from "zustand";
import { TProductBasket } from "@/types/product";

interface IBasketStore {
  basket: TProductBasket[];
  addToBasket: (item: TProductBasket) => void;
  mergeBasket: (serverBasket: TProductBasket[]) => void;
  updateBasket: (item: TProductBasket) => void;
  removeFromBasket: (item: TProductBasket) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<IBasketStore>((set) => ({
  basket: [],
  clearBasket: () => {
    set((state) => {
      return { ...state, basket: [] };
    });
  },
  mergeBasket: (serverBasket) => {
    set((state) => {
      const localBasket = state.basket;

      const productMap = new Map();

      localBasket.forEach((item) => {
        productMap.set(item.id, item);
      });

      serverBasket.forEach((item) => {
        if (productMap.has(item.id)) {
          const existingItem = productMap.get(item.id);
          productMap.set(item.id, {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity,
          });
        } else {
          productMap.set(item.id, item);
        }
      });

      return { basket: Array.from(productMap.values()) };
    });
  },
  addToBasket: (item: TProductBasket) => {
    set((state) => {
      return {
        ...state,
        basket: [...state.basket, item],
      };
    });
  },
  updateBasket: (item: TProductBasket) => {
    set((state) => {
      return {
        ...state,
        basket: state.basket.map((i) => {
          if (i.id === item.id) {
            return {
              ...i,
              ...item,
            };
          }
          return i;
        }),
      };
    });
  },
  removeFromBasket: (item: TProductBasket) => {
    set((state) => {
      return {
        ...state,
        basket: state.basket.filter((i) => i.id !== item.id),
      };
    });
  },
}));
