import { TProduct } from "@/types/product";
import { ReactNode } from "react";
import { Ratings } from "@/components/ui/rating/Rating.tsx";

const ProductReviews = ({
  reviews,
}: {
  reviews: TProduct["reviews"];
}): ReactNode => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className={"p-2 w-2/3 border-t border-gray-200 mb-4 mx-auto"}>
      <h2 className={"text-2xl text-gray-800 m-0 mb-2 font-bold"}>
        Product Reviews
      </h2>
      {reviews.map((review, index) => (
        <div key={index} className={"border-b border-gray-200 py-4 w-full"}>
          <h3 className={"text-lg font-bold"}>{review.reviewerName}</h3>
          <p className={"text-base text-gray-600"}>{review.comment}</p>
          <Ratings
            rating={review.rating}
            className={"text-yellow-500 w-full flex"}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductReviews;
