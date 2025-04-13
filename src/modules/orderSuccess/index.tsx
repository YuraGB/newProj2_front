import { ReactNode } from "react";
import { useOrderSuccess } from "@/modules/orderSuccess/hook";
import { Slider } from "@/components/slider";
import { SwiperSlide } from "swiper/react";
import { Slide } from "@/modules/hp_slider/Slide.tsx";

export const OrderSuccess = (): ReactNode => {
  const { orderData, orderError, isLoading } = useOrderSuccess();

  if (orderError || isLoading || !orderData) return null;

  const { username, email, products, address, paymentType, state, city, zip } =
    orderData;

  const total = products.reduce((acc, prod) => {
    return acc + prod.price * prod.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <article className="w-full mb-4 p-2 bg-gray-100 rounded-md shadow-md">
        <h3 className={"font-bold"}>Client:</h3>
        <span>Name: {username}</span>
        <p>Email: {email}</p>
      </article>
      <article className="w-full mb-4 p-2 bg-gray-100 rounded-md shadow-md">
        <h3 className={"font-bold"}>Address:</h3>
        <p>
          {address}, {city}, {state}, {zip}
        </p>
        <p>Payment Method: {paymentType}</p>
      </article>
      <article className={"w-full mb-4 p-2 bg-gray-100 rounded-md shadow-md"}>
        <h3 className={"font-bold"}>Total: </h3>
        <span>${total}</span>
      </article>
      <article className={"p-1 relative w-full"}>
        <h3 className={"font-bold"}>Products: </h3>
        <Slider sliderOptions={{}}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Slide product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </article>
    </div>
  );
};
