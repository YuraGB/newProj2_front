import { FC, ReactNode } from "react";
import { TProduct } from "@/types/product";
import { ProductPrice } from "@/components/productPrice";

export const ProductDescription: FC<{
  product: TProduct;
  children?: ReactNode;
}> = ({ product, children }): ReactNode => {
  const { description, sku, brand, title, price } = product;

  return (
    <section className={"p-2"}>
      <h2 className={"text-lg text-gray-800 m-0 mb-2 font-bold"}>{title}</h2>
      <h3 className={"text-sm text-gray-200"}>{sku}</h3>
      <h3 className={"text-sm text-base"}>{brand}</h3>
      <p className={"text-sm text-primary"}>{description}</p>
      <ProductPrice price={price} additionalClasses={"font-bold"} />
      {!!children ? <section className={"my-4"}>{children}</section> : null}
    </section>
  );
};
