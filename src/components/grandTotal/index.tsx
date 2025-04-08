import { ReactNode } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";

export const GrandTotal = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const products = useBasketStore((state) => state.basketProducts);
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  if (total === 0) return null;
  return (
    <section className={"p-4 rounded shadow-md bg-gray-100"}>
      <h3 className={"font-bold"}>Grand Total</h3>
      <p>{`$${total.toFixed(2)}`}</p>

      {children}
    </section>
  );
};
