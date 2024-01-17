import AnimeGridList from "@/components/anime-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import React from "react";

type ViewTopAiringProps = {
  page: string;
};

export default async function ViewTopAiring({ page }: ViewTopAiringProps) {
  const airingAnime = await getTopAnime("airing", +page);

  return <AnimeGridList {...airingAnime} title="Top Airing Anime" />;
}
