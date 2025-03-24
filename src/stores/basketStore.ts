import { create } from "zustand";
import { TProduct, TProductBasket } from "@/types/product";
import { persist } from "zustand/middleware";

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

export const useBasketStore = create<IBasketStore>()(
  persist(
    (set, get) => ({
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
        set((state) => {
          return { ...state, basket: [], basketProducts: [] };
        });
      },
      mergeBasket: (serverBasket) => {
        const state = useBasketStore.getState(); // Отримуємо поточний стан без ререндеру

        const productMap = new Map();
        state.basket.forEach((item) => productMap.set(item.productId, item));
        serverBasket.forEach((item) => {
          if (productMap.has(item.productId)) {
            productMap.get(item.productId).quantity = item.quantity;
          } else {
            productMap.set(item.productId, item);
          }
        });

        const newBasket = Array.from(productMap.values());

        // Якщо кошик не змінився – не оновлюємо стан
        if (JSON.stringify(state.basket) === JSON.stringify(newBasket)) {
          return;
        }

        set({
          ...state,
          basket: newBasket,
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
              if (i.productId === item.productId) {
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
            basket: state.basket.filter((i) => i.productId !== item.productId),
          };
        });
      },
    }),
    {
      name: "basket",
      // getStorage: () => localStorage,
    },
  ),
);
