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
    <section className={"grid md:grid-cols-4 gap-y-4 grid-cols-1"}>
      <aside className={"col-span-2 md:col-span-1"}>
        <ProductList />
      </aside>
      <article className="pt-8 col-span-2 max-w-[700px] w-full mx-auto md:col-span-3">
        <h3 className="text-xl font-medium text-gray-900">Checkout</h3>
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
