"use client";

import { Result } from "@/libs/get-top-anime";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import AnimeCard from "./anime-card";

type PaginationButtonProps = {
  hasNextPage: boolean;
};

function PaginationButton({ hasNextPage }: PaginationButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center gap-2">
      <Button
        color="secondary"
        size="sm"
        variant="ghost"
        startContent={<ChevronLeft className="w-4 h-4" />}
        isDisabled={+page === 1}
        onPress={() => {
          router.push(
            pathname + "?" + createQueryString("page", (+page - 1).toString())
          );
        }}
      >
        Prev
      </Button>
      <Button
        color="secondary"
        size="sm"
        variant="ghost"
        endContent={<ChevronRight className="w-4 h-4" />}
        isDisabled={!hasNextPage}
        onPress={() => {
          router.push(
            pathname + "?" + createQueryString("page", (+page + 1).toString())
          );
        }}
      >
        Next
      </Button>
    </div>
  );
}

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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold ">{title}</h1>
        <PaginationButton hasNextPage={!!hasNextPage} />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {animes.map((anime) => (
          <div className="relative" key={anime.title}>
            <div className="absolute top-0 left-0 z-[1] rounded-br-lg">
              <div className="bg-secondary/80  text-white text-3xl font-semibold min-w-10 flex items-center justify-center rounded-br-lg px-4 py-1">
                {anime.rank}
              </div>
            </div>
            <AnimeCard {...anime} />
          </div>
        ))}
      </div>
    </>
  );
}
