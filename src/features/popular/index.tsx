import AnimeGridList from "@/components/anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import React, { Suspense } from "react";

type ViewPopularAnimeProps = {
  page: string;
};

export default async function ViewPopularAnime({
  page,
}: ViewPopularAnimeProps) {
  const popularAnime = await getTopAnime("bypopularity", +page);

  return (
    <Suspense fallback={<AnimeSkeletonGridList />}>
      <AnimeGridList {...popularAnime} title="Most Popular Anime" />
    </Suspense>
  );
}
