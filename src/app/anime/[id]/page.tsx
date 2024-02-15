import ViewAnimeDetail from "@/features/anime-detail";
import { getAnimeDetail } from "@/libs/get-anime-detail";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const anime = await getAnimeDetail(`${params.id}`);

  return {
    title: `${anime.jp_title}`,
    description: anime.synopsis,
    openGraph: {
      title: anime.jp_title,
      description: anime.synopsis,
      url: `https://animecatalogue.vercel.app/anime/${params.id}`,
      siteName: "Anime Catalogue",
      images: [
        {
          url: anime.poster,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string; name: string };
}) {
  const data = await getAnimeDetail(`${params.id}/${params.name}`);

  return <ViewAnimeDetail data={data} params={params} />;
}
