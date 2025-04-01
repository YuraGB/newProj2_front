import { ReactNode } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";

export const GrandTotal = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const products = useBasketStore((state) => state.basketProducts);
  return (
    <section className={"p-4"}>
      <h3 className={"font-bold"}>Grand Total</h3>
      <p>{`$${products.reduce((acc, product) => acc + product.price * product.quantity, 0)}`}</p>

      {children}
    </section>
  );
};
