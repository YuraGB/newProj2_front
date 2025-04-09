import { ReactNode } from "react";
import { SkeletonFooter } from "@/components/footer/SkeletonFooter.tsx";
import { HeaderSkeleton } from "@/components/header/SkeletonHeader.tsx";

export const SkeletonPage = ({
  children,
}: {
  children?: ReactNode;
}): ReactNode => {
  return (
    <>
      <HeaderSkeleton />
      <main className={`container mx-auto p-4 h-full`}>{children}</main>
      <SkeletonFooter />
    </>
  );
};
