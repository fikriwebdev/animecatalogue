import getAvailableSeasons from "@/libs/get-available-seasons";
import { Metadata } from "next";
import SeasonAnimeGridList from "./_components/season-anime-grid-list";
import SeasonTabs from "./_components/season-tabs";

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

export default async function SeasonAnime({ searchParams }: SeasonAnimeProps) {
  const seasons = await getAvailableSeasons();

  const defaulTab = seasons.filter((season) => season.isDefault)[0];

  return (
    <div className="p-4">
      <SeasonTabs tabs={seasons} />
      <SeasonAnimeGridList tab={searchParams.tab || defaulTab.href} />
    </div>
  );
}
