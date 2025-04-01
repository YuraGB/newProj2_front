import { useBasketStore } from "@/stores/basketStore.ts";
import { ProductCard } from "@/components/productCard";
import { GrandTotal } from "@/components/grandTotal";

export const ProductList = () => {
  const products = useBasketStore((state) => state.basketProducts);

  if (!products.length) return null;
  return (
    <section className={"flex flex-col"}>
      <GrandTotal />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
