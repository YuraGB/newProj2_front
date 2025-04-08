import { useBasketStore } from "@/stores/basketStore.ts";
import { ProductCard } from "@/components/productCard";

export const ProductList = () => {
  const products = useBasketStore((state) => state.basketProducts);

  if (!products.length) return null;
  return (
    <section className={"md:flex md:flex-col columns-2 "}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
