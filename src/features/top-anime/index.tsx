import AnimeGridList from "@/components/anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import { Suspense } from "react";

type ViewTopAnimeProps = {
  page: string;
};

export default async function ViewTopAnime({ page }: ViewTopAnimeProps) {
  const topAnime = await getTopAnime("bypopularity", +page);

  return (
    <Suspense fallback={<AnimeSkeletonGridList />}>
      <AnimeGridList {...topAnime} title="Top Anime Series" />
    </Suspense>
  );
}
