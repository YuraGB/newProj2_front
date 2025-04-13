import { memo, ReactNode, useMemo } from "react";
import { useBasketStore } from "@/stores/basketStore.ts";
import { ProductCard } from "@/components/productCard";
import { GrandTotal } from "@/components/grandTotal";
import PrefetchNavLink from "@/components/prefetchNavLink";
import { PopoverClose } from "@radix-ui/react-popover";

const MiniCartProducts = memo((): ReactNode => {
  const basketProducts = useBasketStore((state) => state.basketProducts);
  const cachedProducts = useMemo(() => basketProducts, [basketProducts]);
  if (!cachedProducts.length)
    return (
      <div className={"flex justify-center items-center h-[100px]"}>
        <span className={"text-gray-200"}>No products in the cart</span>
      </div>
    );

  return (
    <div
      className={
        "max-h-[100dvh] h-[500px] overflow-auto  relative pb-[20px] mx-2"
      }
    >
      <GrandTotal>
        <PrefetchNavLink
          to={"/checkout"}
          additionalClasses={"bg-transparent cursor-pointer"}
          loadComponent={() => import("@/pages/Checkout")}
        >
          <PopoverClose
            className={"bg-primary p-2 rounded-md my-2 w-full cursor-pointer"}
          >
            <span className={"text-gray-200"}>Go to checkout</span>
          </PopoverClose>
        </PrefetchNavLink>
      </GrandTotal>
      <section className={"max-h-[100svh] pb-[20px] mt-2"}>
        <h3 className={"font-bold text-primary"}>Products:</h3>
        {cachedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
});

export default MiniCartProducts;
