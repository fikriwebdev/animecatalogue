import AnimeCarousel from "@/components/anime-carousel";
import { getTopAnime } from "@/libs/get-top-anime";
import { getUpcomingAnime } from "@/libs/get-upcoming-anime";

export default async function ViewHome() {
  const upcomingAnime = await getUpcomingAnime();
  const topAnime = await getTopAnime();
  const topAiringAnime = await getTopAnime("airing");
  const mostPopularAnime = await getTopAnime("bypopularity");
  const mostFavoritAnime = await getTopAnime("favorite");

  return (
    <>
      <AnimeCarousel
        anime={{ animes: upcomingAnime.anime }}
        title={upcomingAnime.title}
      />
      <AnimeCarousel
        anime={topAnime}
        title="Top Anime"
        withRanking
        viewAllHref="/top-anime"
      />
      <AnimeCarousel
        anime={topAiringAnime}
        title="Top Airing Anime"
        viewAllHref="/top-airing"
      />
      <AnimeCarousel
        anime={mostPopularAnime}
        title="Most Popular Anime"
        viewAllHref="/popular"
      />
      <AnimeCarousel
        anime={mostFavoritAnime}
        title="Most Favorite Anime"
        viewAllHref="/favorite"
      />
    </>
  );
}
