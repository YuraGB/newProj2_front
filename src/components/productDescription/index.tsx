import { FC, ReactNode } from "react";
import { TProduct } from "@/types/product";
import { ProductPrice } from "@/components/productPrice";
import { ProductDimensions } from "@/components/productDimensions";
import { ProductWarranty } from "@/components/productWarranty";
import { Ratings } from "@/components/ui/rating/Rating.tsx";

export const ProductDescription: FC<{
  product: TProduct;
  children?: ReactNode;
}> = ({ product, children }): ReactNode => {
  const {
    description,
    sku,
    brand,
    title,
    price,
    warrantyInformation,
    dimensions,
    category,
    rating,
  } = product;

  return (
    <section className={"p-2 w-2/3"}>
      <h2 className={"text-2xl text-gray-800 m-0 mb-2 font-bold"}>{title}</h2>
      <p className={"text-lg text-gray-200 py-4"}>{sku}</p>
      <p className={"text-lg text-base "}>{`Category: ${category}`}</p>
      <p className={"text-lg text-base font-bold"}>{brand}</p>
      <p className={"text-primary text-primary py-2"}>{description}</p>

      <ProductDimensions dimensions={dimensions} />

      <ProductWarranty warranty={warrantyInformation} />

      <ProductPrice price={price} additionalClasses={"font-bold"} />

      {children ? <section className={"my-8"}>{children}</section> : null}

      <Ratings rating={rating} />
    </section>
  );
};
