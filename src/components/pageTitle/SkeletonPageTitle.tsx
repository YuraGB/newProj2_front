import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const SkeletonPageTitle = (): ReactNode => {
  return (
    <div className="my-5">
      <h2>
        <Skeleton className={"w-45 h-10"} />
      </h2>
    </div>
  );
};
