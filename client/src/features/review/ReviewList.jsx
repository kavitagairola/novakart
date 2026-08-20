import { reviews } from "../../constants/reviewData";
import ReviewCard from "./ReviewCard";

function ReviewList({ productId }) {
  const productReviews = reviews.filter(
    (review) => review.productId === productId
  );

  if (productReviews.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h3 className="text-xl font-semibold text-slate-700">
          No Reviews Yet
        </h3>

        <p className="mt-2 text-slate-500">
          Be the first one to review this product.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {productReviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}

export default ReviewList;