"use client";

import { type AnimeByQueryResult } from "@/libs/get-anime-by-query";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";
import React, { PropsWithChildren } from "react";
import useSWR from "swr";
import SearchAnimeCard from "../search-anime-card";
import Link from "next/link";
import SearchAnimeCardSkeleton from "../search-anime-card-skeleton";
import { useDebounce } from "use-debounce";

type SearchResultProps = {
  search: string;
};

export function SearchResult({ search }: SearchResultProps) {
  const { data, error } = useSWR<AnimeByQueryResult>(
    `/api/search?query=${search}&limit=6`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  if (error) return <p>Caught an error, please try another query.</p>;
  if (!data)
    return (
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        <SearchAnimeCardSkeleton />
        <SearchAnimeCardSkeleton />
        <SearchAnimeCardSkeleton />
        <SearchAnimeCardSkeleton />
        <SearchAnimeCardSkeleton />
        <SearchAnimeCardSkeleton />
      </div>
    );
  if (!data.anime.length) return <p>No result for query {search}</p>;

  return (
    <div className="px-4 mt-4">
      <p>
        Result for <span className="italic">{search}</span>
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.anime.map((anime) => (
          <SearchAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
      <Link
        className="flex justify-center"
        href={{
          pathname: "/search",
          query: {
            q: search,
          },
        }}
      >
        <Button className="mt-4 mx-4">See All Result</Button>
      </Link>
    </div>
  );
}

export default function SearchAnime({ children }: PropsWithChildren) {
  const [search, setSearch] = React.useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  return (
    <aside className="hidden md:block col-span-2 border-l border-2 border-slate-800  h-screen overflow-y-auto sticky right-0 top-0">
      <div className="px-4 mt-4">
        <Input
          classNames={{
            inputWrapper:
              "bg-primary-800 group-data-[hover=true]:bg-primary-700 group-data-[focus=true]:bg-primary-700",
          }}
          startContent={<Search />}
          placeholder="Type to search"
          radius="full"
          size="sm"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {debouncedSearch ? <SearchResult search={debouncedSearch} /> : children}
    </aside>
  );
}
