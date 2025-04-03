import { lazy, Suspense } from "react";

import { UserInfo } from "@/modules/checkout_multiform/components/user/UserInfo.tsx";
import { StepProgressBar } from "@/modules/checkout_multiform/components/StepProgressBar.tsx";
import { ProductList } from "@/modules/checkout_multiform/components/products/ProductList.tsx";

const PaymentMethods = lazy(
  () => import("@/modules/checkout_multiform/components/paymentMethods"),
);
const AddressInfo = lazy(
  () =>
    import("@/modules/checkout_multiform/components/address/AddressInfo.tsx"),
);
const SubmitOrder = lazy(
  () => import("@/modules/checkout_multiform/components/submitOrder"),
);

export const Checkout_multiform = () => {
  return (
    <section className={"grid grid-cols-4 gap-y-4"}>
      <aside className={"col-span-1"}>
        <ProductList />
      </aside>
      <article className="pt-8 col-span-3 max-w-[700px] w-full mx-auto">
        <StepProgressBar />
        <UserInfo />
        <Suspense fallback={<div>Loading...</div>}>
          <AddressInfo />
          <PaymentMethods />
          <SubmitOrder />
        </Suspense>
      </article>
    </section>
  );
};
