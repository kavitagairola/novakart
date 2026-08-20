function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold text-slate-900">
            {review.user}
          </h3>

          <p className="text-sm text-slate-500">
            {review.date}
          </p>

        </div>

        <span className="font-medium text-yellow-500">
          ⭐ {review.rating}
        </span>

      </div>

      {/* Review */}
      <p className="mt-4 leading-7 text-slate-600">
        {review.comment}
      </p>

    </div>
  );
}

export default ReviewCard;