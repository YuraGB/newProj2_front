export const ProductWarranty = ({ warranty }: { warranty: string }) => {
  return (
    <p className={"grid-cols-2 w-full grid justify-between mb-2"}>
      <span className={"font-bold"}>Warranty: </span>
      <span className={"text-primary"}>{warranty}</span>
    </p>
  );
};
