import ViewAnimeDetail from "@/features/anime-detail";
import { getAnimeDetail } from "@/libs/get-anime-detail";
import React from "react";
import Loading from "./loading";

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string; name: string };
}) {
  const data = await getAnimeDetail(`${params.id}/${params.name}`);

  return <ViewAnimeDetail data={data} />;
}
