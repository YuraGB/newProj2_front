import { OrderSuccess } from "@/modules/orderSuccess";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Order Success</h1>
      <p className="text-lg">Thank you for your order!</p>
      <p className="text-lg">Your order has been placed successfully.</p>
      <OrderSuccess />
    </div>
  );
};

export default OrderSuccessPage;
