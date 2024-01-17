import AnimeCard from "@/components/anime-card";
import { getTopAnime } from "@/libs/get-top-anime";
import PaginationButton from "./components/pagination-button";
import AnimeGridList from "@/components/anime-grid-list";

type ViewTopAnimeProps = {
  page: string;
};

export default async function ViewTopAnime({ page }: ViewTopAnimeProps) {
  const topAnime = await getTopAnime("bypopularity", +page);

  return <AnimeGridList {...topAnime} title="Top Anime Series" />;
}
