import { FC, memo, ReactNode } from "react";
import { THPProductsSlider } from "@/types/product";
import CustomImage from "@/components/image";
import PrefetchNavLink from "@/components/prefetchNavLink";

export const ProductCard: FC<{
  product: THPProductsSlider & { quantity: number };
}> = memo(({ product }): ReactNode => {
  const { price, id, title, thumbnail, quantity } = product;

  return (
    <PrefetchNavLink
      to={`/products/${id}`}
      loadComponent={() => import(`@/pages/Product`)}
    >
      <section
        className={
          "shadow-md flex flex-col md:m-4 cursor-pointer break-inside-avoid"
        }
      >
        <CustomImage
          title={title}
          loading={"lazy"}
          src={thumbnail}
          alt={`image of ${title}`}
        />
        <p className={"p-2 text-primary"}>
          {quantity === 1 ? "Item: 1" : `Items: ${quantity}`}
        </p>
        <footer className={"p-2 mb-2 flex justify-between"}>
          <h2 className={"font-bold text-primary h-[48px] overflow-hidden"}>
            {title}
          </h2>

          <span className={"text-primary"}>{`$${price}`}</span>
        </footer>
      </section>
    </PrefetchNavLink>
  );
});
