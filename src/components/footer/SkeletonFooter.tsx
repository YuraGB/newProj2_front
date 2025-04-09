import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const SkeletonFooter = (): ReactNode => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full flex-column px-4">
      <nav className={"grid grid-cols-3 gap-4 mb-4 container m-auto"}>
        <div className="flex flex-col">
          <Skeleton className={"w-23 h-3 m-2 bg-gray-400"} />
          <ul>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <Skeleton className={"w-23 h-3 m-2 bg-gray-400"} />
          <ul>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <Skeleton className={"w-23 h-3 m-2 bg-gray-400"} />
          <ul>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
            <li>
              <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto text-center w-full flex justify-center">
        <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
        <Skeleton className={"w-13 h-3 m-2 bg-gray-400"} />
      </div>
    </footer>
  );
};
