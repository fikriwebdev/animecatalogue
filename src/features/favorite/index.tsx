import AnimeGridList from "@/components/anime-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import React from "react";

type ViewFavoriteAnimeProps = {
  page: string;
};

export default async function ViewFavoriteAnime({
  page,
}: ViewFavoriteAnimeProps) {
  const favoritAnime = await getTopAnime("favorite", +page);

  return <AnimeGridList {...favoritAnime} title="Most Favorited Anime" />;
}
