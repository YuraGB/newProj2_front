import { UserInfo } from "@/modules/checkout_multiform/components/user/UserInfo.tsx";
import { AddressInfo } from "@/modules/checkout_multiform/components/address/AddressInfo.tsx";
import { StepProgressBar } from "@/modules/checkout_multiform/components/StepProgressBar.tsx";
import { ProductList } from "@/modules/checkout_multiform/components/products/ProductList.tsx";

export const Checkout_multiform = () => {
  return (
    <section className={"grid grid-cols-4 gap-y-4"}>
      <aside className={"col-span-1"}>
        <ProductList />
      </aside>
      <article className="pt-8 col-span-3 max-w-[700px] w-full mx-auto">
        <StepProgressBar />
        <UserInfo />
        <AddressInfo />
      </article>
    </section>
  );
};
