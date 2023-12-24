import AnimeCarousel from "@/components/anime-carousel";
import { getUpcomingAnime } from "@/libs/getUpcomingAnime";
import { getTopAnime } from "@/libs/getTopAnime";
import UpcomingAnimeCarousel from "./components/upcoming-anime-carousel";

export default async function ViewHome() {
  const upcomingAnime = await getUpcomingAnime();
  const topAnime = await getTopAnime();
  const topAiringAnime = await getTopAnime("airing");
  const mostPopularAnime = await getTopAnime("bypopularity");
  const mostFavoritAnime = await getTopAnime("favorite");

  return (
    <div>
      <UpcomingAnimeCarousel anime={upcomingAnime} />
      <AnimeCarousel anime={topAnime} title="Top Anime" withRanking />
      <AnimeCarousel anime={topAiringAnime} title="Top Airing Anime" />
      <AnimeCarousel anime={mostPopularAnime} title="Most Popular Anime" />
      <AnimeCarousel anime={mostFavoritAnime} title="Most Favorite Anime" />
    </div>
  );
}
