import ViewTopAnime from "@/features/top-anime";

type TopAnimeProps = {
  searchParams: {
    page: string;
  };
};

export default function TopAnime({ searchParams }: TopAnimeProps) {
  return <ViewTopAnime page={searchParams.page || "1"} />;
}
