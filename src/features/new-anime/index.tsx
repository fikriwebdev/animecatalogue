import UpdatedAnimeCard from "@/components/updated-anime-card";
import getLatestUpdatedAnime from "@/libs/get-latest-updated-anime";
import React from "react";

export default async function ViewNewAnime() {
  const animes = await getLatestUpdatedAnime();

  return (
    <div>
      <h1 className="text-3xl font-semibold ">New Added Anime</h1>
      <div className="grid grid-cols-6 gap-4 mt-4">
        {animes.map((anime) => (
          <UpdatedAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
    </div>
  );
}
