import getGenres from "@/libs/get-genres";
import type { Metadata } from "next";
import GenreCard from "./_components/genre-card";

export const metadata: Metadata = {
  title: `All Genre`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
};

export default async function Genres() {
  const genres = await getGenres();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">All Anime Genres</h1>
      </div>

      <div className="mt-4">
        {genres.map((genre) => (
          <div key={genre.title} className="mb-8">
            <h2 className="font-semibold border-b border-primary pb-1">
              {genre.title}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
              {genre.items.map((item) => (
                <GenreCard key={item.href} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
