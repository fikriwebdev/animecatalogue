import ViewAnimeDetail from "@/features/anime-detail";
import { getAnimeDetail } from "@/libs/getAnimeDetail";
import React from "react";

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string; name: string };
}) {
  const data = await getAnimeDetail(`${params.id}/${params.name}`);

  return <ViewAnimeDetail data={data} />;
}
