import { THPProductsSlider } from "@/types/product";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router";

export const Slide: FC<{ product: THPProductsSlider }> = ({
  product,
}): ReactNode => {
  const { price, id, title, thumbnail } = product;
  const navigate = useNavigate();

  return (
    <section
      className={"shadow-md flex flex-col m-4 cursor-pointer"}
      onClick={() => navigate(`/products/${id}`)}
    >
      <img
        title={title}
        loading={"eager"}
        className={"m-auto"}
        width={255}
        height={255}
        src={thumbnail}
        alt={`image of ${title}`}
      />
      <section className={"p-2 mb-2 flex justify-between"}>
        <h2 className={"min-h-[3rem] pl-2 text-gray-400"}>{title}</h2>
        <span className={"font-bold"}>{`$${price}`}</span>
      </section>
    </section>
  );
};
