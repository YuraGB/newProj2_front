import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const SkeletonProfileMenu = (): ReactNode => {
  return <Skeleton className={"w-10 rounded-[50%] h-10 m-2"} />;
};
