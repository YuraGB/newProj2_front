import { lazy, memo, ReactNode, Suspense } from "react";
import { useMiniCart } from "@/modules/basket/hook/useMiniCart.ts";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
const MiniCartProducts = lazy(
  () => import("@/modules/basket/miniCartProducts.tsx"),
);

const MiniCart = (): ReactNode => {
  const { loadingBasketCounter, errorBasketCounter, basketCounter } =
    useMiniCart();

  if (loadingBasketCounter) return <p>Loading...</p>;
  if (errorBasketCounter) return <p>Error</p>;

  return (
    <Popover>
      <PopoverTrigger asChild={true}>
        <Button variant="outline">
          <ShoppingBasket />
          <Badge variant={"destructive"}>{basketCounter ?? 0}</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Suspense fallback={<div>...Loading</div>}>
          <MiniCartProducts />
        </Suspense>
      </PopoverContent>
    </Popover>
  );
};

export default memo(MiniCart);
