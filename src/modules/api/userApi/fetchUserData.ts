import apiCall from "@/lib/axiosBase.ts";
import { TUser } from "@/types/auth";
import { queryClient } from "@/lib/reactQuery.tsx";

export const fetchUserData = async () => {
  const { data } = await apiCall.get<{
    user: TUser;
    accessToken: string | null;
  }>("/user");
  return data;
};

export const fetchUserQueryOptions = {
  queryKey: ["user"],
  queryFn: fetchUserData,
  staleTime: 1000 * 60, // 1 minutes
};

export const prefetchUserData = async () => {
  await queryClient.ensureQueryData(fetchUserQueryOptions);

  return null;
};
