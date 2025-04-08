import { ReactNode } from "react";
import { useCategoryProducts } from "@/modules/categoryProducts/hook";
import { PageTitle } from "@/components/pageTitle";
import CustomImage from "@/components/image";
import PrefetchNavLink from "@/components/prefetchNavLink";

export const CategoryProducts = (): ReactNode => {
  const {
    categoryProducts,
    errorCategoryProducts,
    loadingProducts,
    categoryName,
  } = useCategoryProducts();

  if (errorCategoryProducts) return null;
  if (loadingProducts) return <div>Loading...</div>;
  if (!categoryProducts) return null;
  if (!categoryName) return null;

  return (
    <>
      <PageTitle title={categoryName} />
      <div className={"grid grid-cols-4 gap-4"}>
        {categoryProducts.map((product) => (
          <div key={product.id} className={"border p-4 rounded-md"}>
            <PrefetchNavLink
              to={`/products/${product.id}`}
              loadComponent={() => import("@/pages/Product")}
            >
              <CustomImage
                src={product.images[0]}
                alt={product.title}
                className={"w-full h-48 object-contain mb-4"}
                width={400}
                height={1600}
              />
              <h2 className={"text-xl font-semibold text-gray-800"}>
                {product.title}
              </h2>
              <p className={"text-primary"}>{product.description}</p>
              <p className={"font-bold text-primary"}>${product.price}</p>
            </PrefetchNavLink>
          </div>
        ))}
      </div>
    </>
  );
};
