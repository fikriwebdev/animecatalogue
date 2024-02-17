import Breadcrumbs from "@/components/breadcrumbs";
import UpdatedAnimeCard from "@/components/updated-anime-card";
import getLatestUpdatedAnime from "@/libs/get-latest-updated-anime";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `New anime added`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
};

export default async function NewAnime() {
  const animes = await getLatestUpdatedAnime();

  return (
    <div className="p-4">
      <div className="mb-4 mt-8">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "New anime added",
              href: "/new-anime",
            },
          ]}
        />
      </div>
      <h1 className="text-xl md:text-3xl font-semibold ">New Anime Added</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {animes.map((anime) => (
          <UpdatedAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
    </div>
  );
}
