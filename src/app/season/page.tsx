import getAvailableSeasons from "@/libs/get-available-seasons";
import { Metadata } from "next";
import SeasonTabs from "./_components/season-tabs";
import SeasonAnimeGridList from "./_components/season-anime-grid-list";
import { Suspense } from "react";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: `Seasonal Anime`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
};

type SeasonAnimeProps = {
  searchParams: {
    tab: string;
  };
};

const SeasonAnimeList = async ({ tab }: { tab: string }) => {
  const seasons = await getAvailableSeasons();

  const defaulTab = seasons.filter((season) => season.isDefault)[0];

  return (
    <div className="p-4">
      <div className="px-4 mt-8 mb-4">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Season",
              href: "/season",
            },
          ]}
        />
      </div>

      <SeasonTabs tabs={seasons} />
      <Suspense key={tab} fallback={<AnimeSkeletonGridList />}>
        <SeasonAnimeGridList tab={tab || defaulTab.href} />
      </Suspense>
    </div>
  );
};

export default async function SeasonAnime({ searchParams }: SeasonAnimeProps) {
  return (
    <Suspense fallback={null}>
      <SeasonAnimeList tab={searchParams.tab} />
    </Suspense>
  );
}
