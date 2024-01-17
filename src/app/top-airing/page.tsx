import ViewTopAiring from "@/features/top-airing";

type TopAiringProps = {
  searchParams: {
    page: string;
  };
};

export default function TopAiring({ searchParams }: TopAiringProps) {
  return <ViewTopAiring page={searchParams.page || "1"} />;
}
