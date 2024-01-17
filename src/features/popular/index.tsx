import AnimeGridList from "@/components/anime-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import React from "react";

type ViewPopularAnimeProps = {
  page: string;
};

export default async function ViewPopularAnime({
  page,
}: ViewPopularAnimeProps) {
  const popularAnime = await getTopAnime("bypopularity", +page);

  return <AnimeGridList {...popularAnime} title="Most Popular Anime" />;
}
