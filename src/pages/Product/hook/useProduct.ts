import { useParams } from "react-router";
import { useProductApi } from "@/pages/Product/api/useProductApi.ts";

export const useProduct = () => {
  const params = useParams();
  const productId = params?.id ? Number(params.id) : undefined;
  const { productLoading, productError, productData } =
    useProductApi(productId);
  return {
    productData,
    productError,
    productLoading,
  };
};
