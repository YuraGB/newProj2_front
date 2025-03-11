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
        src={thumbnail}
        alt={`image of ${title}`}
      />
      <section className={"p-2 mb-2 flex justify-between"}>
        <h2>{title}</h2>
        <span>{`$${price}`}</span>
      </section>
    </section>
  );
};
