import getReviews from "@/libs/get-reviews";
import React from "react";
import ReviewCard from "./components/review-card";
import PaginationButton from "@/components/pagination-button";

type ViewReviewsProps = {
  page: string;
};

export default async function ViewReviews({ page }: ViewReviewsProps) {
  const data = await getReviews(+page);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Reviews</h1>
        <PaginationButton hasNextPage />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
