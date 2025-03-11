import { TProduct } from "@/types/product";
import { FC, ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button.tsx";
import type { VariantProps } from "class-variance-authority";
import { useAddToCard } from "@/modules/addToCard/hook";

export const AddToCardButton: FC<{
  product: TProduct;
  variant?: keyof VariantProps<typeof buttonVariants>["variant"];
  additionalClasses?: string;
}> = ({ additionalClasses, variant, product }): ReactNode => {
  const { addToCardAction } = useAddToCard();

  return (
    <Button
      onClick={() => addToCardAction({ productId: product.id, quantity: 1 })}
      variant={variant ?? "default"}
      className={`cursor-pointer ${additionalClasses ?? ""}`}
    >
      Buy
    </Button>
  );
};
