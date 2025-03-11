import { memo, ReactNode } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";
import { ProductCard } from "@/components/productCard";

const MiniCartProducts = memo((): ReactNode => {
  const basketProducts = useBasketStore((state) => state.basketProducts);

  return (
    <div
      className={"max-h-[100dvh] h-[500px] overflow-auto  relative pb-[20px]"}
    >
      <section className={"max-h-[100svh] pb-[20px]"}>
        {basketProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
});

export default MiniCartProducts;
