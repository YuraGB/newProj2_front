import { OrderSuccess } from "@/modules/orderSuccess";
import { PageTitle } from "@/components/pageTitle";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageTitle title={"Order Success"} />
      <p className="text-lg">Thank you for your order!</p>
      <p className="text-lg mb-4">Your order has been placed successfully.</p>
      <OrderSuccess />
    </div>
  );
};

export default OrderSuccessPage;
