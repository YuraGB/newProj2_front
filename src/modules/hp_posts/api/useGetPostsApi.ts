import { useQuery } from "@tanstack/react-query";
import apiCall from "@/lib/axiosBase.ts";
import { TPost } from "@/types/post";

export const useGetPostsApi = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["hp_posts"],
    queryFn: async () => {
      const resp = await apiCall<TPost[]>("posts/hp_posts");
      return resp.data;
    },
  });

  return {
    posts,
    error,
    isLoading,
  };
};
