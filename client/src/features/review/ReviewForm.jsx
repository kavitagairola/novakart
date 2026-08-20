import { useState } from "react";
import Button from "../../components/ui/Button";

function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setReviewData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(reviewData);

    setReviewData({
      name: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Write a Review
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={reviewData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        {/* Rating */}

        <select
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        >
          <option value="">
            Select Rating
          </option>

          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        {/* Comment */}

        <textarea
          rows="5"
          name="comment"
          placeholder="Write your review..."
          value={reviewData.comment}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Submit Review
        </Button>

      </form>

    </div>
  );
}

export default ReviewForm;