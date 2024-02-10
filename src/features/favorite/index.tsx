import AnimeGridList from "@/components/anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import { Suspense } from "react";

type ViewFavoriteAnimeProps = {
  page: string;
};

export default async function ViewFavoriteAnime({
  page,
}: ViewFavoriteAnimeProps) {
  const favoritAnime = await getTopAnime("favorite", +page);

  return (
    <Suspense fallback={<AnimeSkeletonGridList />}>
      <AnimeGridList {...favoritAnime} title="Most Favorited Anime" />
    </Suspense>
  );
}
