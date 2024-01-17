import ViewPopularAnime from "@/features/popular";

type PopularAnimeProps = {
  searchParams: {
    page: string;
  };
};

export default function PopularAnime({ searchParams }: PopularAnimeProps) {
  return <ViewPopularAnime page={searchParams.page || "1"} />;
}
