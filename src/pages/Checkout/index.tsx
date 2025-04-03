import { Checkout_multiform } from "@/modules/checkout_multiform";
import { useBasketStore } from "@/stores/basketStore.ts";
import { Button } from "@/components/ui/button.tsx";
import PrefetchNavLink from "@/components/prefetchNavLink";

const Checkout = () => {
  const canCheckout = useBasketStore(
    (state) => state.basketProducts.length > 0,
  );
  if (!canCheckout) {
    return (
      <>
        <h2 className={"font-bold p-6"}>No products in basket</h2>
        <Button>
          <PrefetchNavLink
            to={"/"}
            loadComponent={() => import("@/pages/HomePage")}
          >
            <span className={"text-gray-200"}> Return to Home </span>
          </PrefetchNavLink>
        </Button>
      </>
    );
  }

  return (
    <article>
      <Checkout_multiform />
    </article>
  );
};

export default Checkout;
