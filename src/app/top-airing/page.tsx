import AnimeGridList from "@/components/anime-grid-list";
import { getTopAnime } from "@/libs/get-top-anime";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Top Airing Anime`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
};

type TopAiringProps = {
  searchParams: {
    page: string;
  };
};

export default async function TopAiring({ searchParams }: TopAiringProps) {
  const page = searchParams.page || "1";
  const airingAnime = await getTopAnime("airing", +page);

  return <AnimeGridList {...airingAnime} title="Top Airing Anime" />;
}
