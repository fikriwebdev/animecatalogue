import ViewReviews from "@/features/reviews";

type ReviewsProps = {
  searchParams: {
    page: string;
  };
};

export default function Reviews({ searchParams }: ReviewsProps) {
  return <ViewReviews page={searchParams.page || "1"} />;
}
