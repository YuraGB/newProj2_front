import { useQuery } from "@tanstack/react-query";
import apiCalls from "@/lib/axiosBase.ts";

export const useGetCategoriesMenu = () => {
  const {
    data: categoryList,
    error: errorCategoryList,
    isLoading,
  } = useQuery({
    queryKey: ["categoriesMenu"],
    queryFn: async () => {
      const { data } = await apiCalls.get<string[]>("category-list");
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    categoryList,
    isLoading,
    errorCategoryList,
  };
};
