import { useGetCategoriesMenu } from "@/modules/categoriesMenu/api";

export const useGetCategories = () => {
  const { errorCategoryList, categoryList, isLoading } = useGetCategoriesMenu();

  return { errorCategoryList, categoryList, isLoading };
};
