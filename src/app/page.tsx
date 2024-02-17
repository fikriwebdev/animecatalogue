import AnimeCarousel from "@/components/anime-carousel";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import { getUpcomingAnime } from "@/libs/get-upcoming-anime";
import { Suspense } from "react";

async function UpcomingAnimeCarousel() {
  const upcomingAnime = await getUpcomingAnime();

  return (
    <AnimeCarousel
      anime={{ animes: upcomingAnime.anime }}
      title={upcomingAnime.title}
    />
  );
}

async function TopAnimeCarousel() {
  const topAnime = await getTopAnime();

  return (
    <AnimeCarousel
      anime={topAnime}
      title="Top Anime"
      withRanking
      viewAllHref="/top-anime"
    />
  );
}

async function TopAiringAnimeCarousel() {
  const topAiringAnime = await getTopAnime("airing");

  return (
    <AnimeCarousel
      anime={topAiringAnime}
      title="Top Airing Anime"
      viewAllHref="/top-airing"
    />
  );
}

async function PopularAnimeCarousel() {
  const popularAnime = await getTopAnime("bypopularity");

  return (
    <AnimeCarousel
      anime={popularAnime}
      title="Most Popular Anime"
      viewAllHref="/popular"
    />
  );
}

async function FavoriteAnime() {
  const favoriteAnime = await getTopAnime("favorite");

  return (
    <AnimeCarousel
      anime={favoriteAnime}
      title="Most Favorite Anime"
      viewAllHref="/favorite"
    />
  );
}

export default function ViewHome() {
  return (
    <>
      <Suspense fallback={<AnimeSkeletonGridList />}>
        <UpcomingAnimeCarousel />
      </Suspense>
      <Suspense fallback={<AnimeSkeletonGridList />}>
        <TopAnimeCarousel />
      </Suspense>
      <Suspense fallback={<AnimeSkeletonGridList />}>
        <TopAiringAnimeCarousel />
      </Suspense>
      <Suspense fallback={<AnimeSkeletonGridList />}>
        <PopularAnimeCarousel />
      </Suspense>
      <Suspense fallback={<AnimeSkeletonGridList />}>
        <FavoriteAnime />
      </Suspense>
    </>
  );
}
