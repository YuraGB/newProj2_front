import { ReactNode } from "react";
import { PageTitle } from "@/components/pageTitle";
import { useProduct } from "@/pages/Product/hook/useProduct.ts";
import { ProductInfo } from "@/modules/productInfo";
import ProductReviews from "@/components/productReviews";

const ProductPage = (): ReactNode => {
  const { productData, productLoading, productError } = useProduct();
  if (!productData || productError) {
    return null;
  }

  if (productLoading) {
    return <div>Loading...</div>;
  }

  return (
    <article className={"page-enter"}>
      <PageTitle title={productData.product.title} />
      <ProductInfo product={productData.product} />
      <ProductReviews reviews={productData.product.reviews} />
    </article>
  );
};

export default ProductPage;
