import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SkeletonPageTitle } from "@/components/pageTitle/SkeletonPageTitle.tsx";

export const SkeletonProductList = () => {
  return (
    <>
      <SkeletonPageTitle />
      <div className={"grid grid-cols-4 gap-4"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
          <div key={product} className={"border p-4 rounded-md"}>
            <Skeleton className={"w-full h-[550px]"} />
          </div>
        ))}
      </div>
    </>
  );
};
