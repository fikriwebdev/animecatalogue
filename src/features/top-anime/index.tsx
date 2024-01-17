import AnimeGridList from "@/components/anime-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";

type ViewTopAnimeProps = {
  page: string;
};

export default async function ViewTopAnime({ page }: ViewTopAnimeProps) {
  const topAnime = await getTopAnime("bypopularity", +page);

  return <AnimeGridList {...topAnime} title="Top Anime Series" />;
}
