import getLatestUpdatedAnime from "@/libs/get-latest-updated-anime";
import React from "react";
import UpdatedAnimeCard from "../updated-anime-card";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default async function LatestUpdatedAnime() {
  const latestUpdatedAnime = await getLatestUpdatedAnime();

  return (
    <>
      <h1 className="my-4 px-4 font-semibold">Latest Update Anime</h1>
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        {latestUpdatedAnime.slice(0, 6).map((anime) => (
          <UpdatedAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
      <Link className="flex justify-center" href="/new-anime">
        <Button className="mt-4 mx-4">See More</Button>
      </Link>
    </>
  );
}
