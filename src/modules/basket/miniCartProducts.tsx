import { memo, ReactNode, useMemo } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";
import { ProductCard } from "@/components/productCard";
import { GrandTotal } from "@/components/grandTotal";
import { Button } from "@/components/ui/button.tsx";
import PrefetchNavLink from "@/components/prefetchNavLink";

const MiniCartProducts = memo((): ReactNode => {
  const basketProducts = useBasketStore((state) => state.basketProducts);
  const cachedProducts = useMemo(() => basketProducts, [basketProducts]);

  if (!cachedProducts) return null;

  return (
    <div
      className={"max-h-[100dvh] h-[500px] overflow-auto  relative pb-[20px]"}
    >
      <GrandTotal>
        <Button className={"my-2 cursor-pointer"}>
          <PrefetchNavLink
            to={"/checkout"}
            loadComponent={() => import("@/pages/Checkout")}
          >
            <span className={"text-gray-200"}>Go to checkout</span>
          </PrefetchNavLink>
        </Button>
      </GrandTotal>
      <section className={"max-h-[100svh] pb-[20px]"}>
        {cachedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
});

export default MiniCartProducts;
