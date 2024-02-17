"use client";

import { Result } from "@/libs/get-top-anime";
import AnimeCard from "./anime-card";
import PaginationButton from "./pagination-button";

type AnimeGridListProps = Result & {
  title: string;
};

export default function AnimeGridList({
  title,
  animes,
  hasNextPage,
}: AnimeGridListProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-8 p-4">
        <h1 className="text-xl md:text-3xl font-semibold ">{title}</h1>
        <PaginationButton hasNextPage={!!hasNextPage} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
          {animes.map((anime) => (
            <div className="relative" key={anime.title}>
              <div className="absolute top-0 left-0 z-[1] rounded-br-lg">
                <div className="bg-secondary/80  text-white text-3xl font-semibold min-w-10 flex items-center justify-center rounded-br-xl rounded-tl-xl px-4 py-1">
                  {anime.rank}
                </div>
              </div>
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>
        <div className="flex justify-end px-4 mb-10">
          <PaginationButton hasNextPage={!!hasNextPage} />
        </div>
      </div>
    </>
  );
}
