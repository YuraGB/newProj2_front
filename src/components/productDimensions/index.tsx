import { ReactNode } from "react";

type TDimensions = {
  width: number;
  height: number;
  depth: number;
};
export const ProductDimensions = ({
  dimensions,
}: {
  dimensions: TDimensions;
}): ReactNode => {
  const { width, height, depth } = dimensions;
  return (
    <div className={"mb-4 border px-2"}>
      <p className={"text-lg"}>Dimensions:</p>
      <p className={"mb-4 grid grid-cols-2 grid-rows-3"}>
        <span className={"font-bold"}>Width:</span>
        <span className={"text-primary"}>{width} cm</span>
        <span className={"font-bold"}>Height:</span>
        <span className={"text-primary"}>{height} cm</span>
        <span className={"font-bold"}>Depth:</span>
        <span className={"text-primary"}>{depth} cm</span>
      </p>
    </div>
  );
};
