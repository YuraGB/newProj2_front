import { useParams } from "react-router";
import { useGetCategoryProductsApi } from "@/modules/categoryProducts/api";

export const useCategoryProducts = () => {
  const { categoryName } = useParams();

  const { categoryProducts, errorCategoryProducts, loadingProducts } =
    useGetCategoryProductsApi(categoryName);

  return {
    errorCategoryProducts,
    categoryProducts: categoryProducts ? categoryProducts : [],
    loadingProducts,
    categoryName,
  };
};
