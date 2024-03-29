"use client";

import SearchAnimeCard from "@/components/search-anime-card";
import SearchAnimeCardSkeleton from "@/components/search-anime-card-skeleton";
import useCreateQueryString from "@/hooks/use-create-query-string";
import { type AnimeByQueryResult } from "@/libs/get-anime-by-query";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { Pagination } from "@nextui-org/pagination";
import { Search as IconSearch } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import { useDebouncedCallback } from "use-debounce";

type SearchResultProps = {
  search: string;
};

function SearchResult({ search }: SearchResultProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const createQueryString = useCreateQueryString();

  const { data, error } = useSWR<AnimeByQueryResult>(
    `/api/search?query=${search}&page=${page}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  if (error) return <p>Caught an error, please try another query.</p>;
  if (!data)
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        {Array(15)
          .fill("")
          .map((_, i) => (
            <SearchAnimeCardSkeleton key={i} />
          ))}
      </div>
    );
  if (!data.anime.length) return <p>No result for query {search}</p>;

  return (
    <div className="mt-4 relative mb-20">
      <p>
        Result for <span className="italic">{search}</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        {data.anime.map((anime) => (
          <SearchAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-10">
        <Pagination
          total={data.totalPage}
          color="secondary"
          size="sm"
          showControls
          page={+page}
          onChange={(page) => {
            router.push(
              pathname +
                "?" +
                createQueryString({
                  page: page.toString(),
                  q: search,
                })
            );
          }}
          classNames={{
            base: "bg-primary-700/20 rounded-xl backdrop-blur-md",
            item: "bg-primary-900 [&[data-hover=true]:not([data-active=true])]:bg-primary-800",
            next: "bg-primary-900 &[data-hover=true]:not([data-active=true])]:bg-primary-800",
            prev: "bg-primary-900 &[data-hover=true]:not([data-active=true])]:bg-primary-800",
          }}
        />
      </div>
    </div>
  );
}

export default function Search() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const createQueryString = useCreateQueryString();

  const [search, setSearch] = React.useState(() => {
    return query || "";
  });

  const debouncedSearch = useDebouncedCallback((value) => {
    router.push(pathname + "?" + createQueryString({ q: value }));
  }, 500);

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Search Anime</h1>
      <Input
        classNames={{
          input: "text-base",
          inputWrapper:
            "bg-primary-800 group-data-[hover=true]:bg-primary-700 group-data-[focus=true]:bg-primary-700",
        }}
        startContent={<IconSearch />}
        placeholder="Type to search"
        radius="full"
        size="sm"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          debouncedSearch(event.target.value);
        }}
      />
      <div className="flex items-center gap-2 mt-4">
        <p className="text-sm">Popular anime:</p>
        <div className="flex items-center gap-2 ">
          <Chip
            size="sm"
            color="default"
            variant="flat"
            as="button"
            onClick={() => {
              // router.push(pathname + "?" + createQueryString({ q: "naruto" }));
              // setSearch('naruto')
              setSearch("naruto");
              debouncedSearch("naruto");
            }}
          >
            Naruto
          </Chip>
          <Chip
            size="sm"
            color="default"
            variant="flat"
            as="button"
            onClick={() => {
              // router.push(pathname + "?" + createQueryString({ q: "bleach" }));
              setSearch("bleach");
              debouncedSearch("bleach");
            }}
          >
            Bleach
          </Chip>
          <Chip
            size="sm"
            color="default"
            variant="flat"
            as="button"
            onClick={() => {
              // router.push(
              //   pathname + "?" + createQueryString({ q: "attack on titan" })
              // );
              setSearch("attack on titan");
              debouncedSearch("attack on titan");
            }}
          >
            Attack on titan
          </Chip>
        </div>
      </div>
      {query ? <SearchResult search={query?.toString() || ""} /> : null}
    </div>
  );
}
