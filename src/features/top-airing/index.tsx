import AnimeGridList from "@/components/anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import { Suspense } from "react";

type ViewTopAiringProps = {
  page: string;
};

export default async function ViewTopAiring({ page }: ViewTopAiringProps) {
  const airingAnime = await getTopAnime("airing", +page);

  return (
    <Suspense fallback={<AnimeSkeletonGridList />}>
      <AnimeGridList {...airingAnime} title="Top Airing Anime" />
    </Suspense>
  );
}
