import AnimeGridList from "@/components/anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import Breadcrumbs from "@/components/breadcrumbs";
import { getTopAnime } from "@/libs/get-top-anime";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Top Anime`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
};

type TopAnimeProps = {
  searchParams: {
    page: string;
  };
};

const TopAnimeList = async ({ page }: { page: string }) => {
  const topAnime = await getTopAnime("bypopularity", +page);

  return (
    <>
      <div className="px-4 mt-8">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Top Anime Series",
              href: "/top-anime",
            },
          ]}
        />
      </div>
      <AnimeGridList {...topAnime} title="Top Anime Series" />
    </>
  );
};

export default async function TopAnime({ searchParams }: TopAnimeProps) {
  const page = searchParams.page || "1";

  return (
    <Suspense key={page} fallback={<AnimeSkeletonGridList />}>
      <TopAnimeList page={page} />
    </Suspense>
  );
}
