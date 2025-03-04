import { FC, ReactNode } from "react";
import { ProductDescription } from "@/components/productDescription";
import { ProductImage } from "@/components/productImage";
import { TProduct } from "@/types/product";
import { AddToCardButton } from "@/modules/addToCard";

export const ProductInfo: FC<{ product: TProduct }> = ({
  product,
}): ReactNode => {
  return (
    <section className={"grid-cols-1 md:grid-cols-2 grid"}>
      <ProductImage src={product.images[0]} alt={product.title} />
      <ProductDescription product={product}>
        <AddToCardButton product={product} />
      </ProductDescription>
    </section>
  );
};
