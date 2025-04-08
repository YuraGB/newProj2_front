import { TProductPrice } from "@/types/product";
import { FC, ReactNode } from "react";

export const ProductPrice: FC<{
  price: TProductPrice;
  additionalClasses?: string;
}> = ({ price, additionalClasses }): ReactNode => {
  return (
    <span className={`text-primary ${additionalClasses ?? ""} bold`}>
      {`Price: $${price}`}
    </span>
  );
};
