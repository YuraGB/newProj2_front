import { create } from "zustand";
import { TProduct } from "@/types/product";

interface IBasketStore {
  basket: TProduct[];
  addToBasket: (item: TProduct) => void;
  updateBasket: (item: TProduct) => void;
  removeFromBasket: (item: TProduct) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<IBasketStore>((set) => ({
  basket: [],
  clearBasket: () => {
    set((state) => {
      return { ...state, basket: [] };
    });
  },
  addToBasket: (item: TProduct) => {
    set((state) => {
      return {
        ...state,
        basket: [...state.basket, item],
      };
    });
  },
  updateBasket: (item: TProduct) => {
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
  removeFromBasket: (item: TProduct) => {
    set((state) => {
      return {
        ...state,
        basket: state.basket.filter((i) => i.id !== item.id),
      };
    });
  },
}));
