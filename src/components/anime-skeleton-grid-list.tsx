import { Card, Skeleton } from "@nextui-org/react";
import { Image as ImageIcon } from "lucide-react";
import React from "react";

function AnimeCardSkeleton() {
  return (
    <Card
      className="basis-[80%] shrink-0 md:w-full space-y-5 p-4 bg-primary-800 h-[300px]"
      radius="lg"
    >
      <div className="relative h-24">
        <Skeleton className="rounded-lg w-full h-full !bg-primary-900/50"></Skeleton>
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="text-primary-500 w-8 h-8" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
        <Skeleton className="w-4/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
        <Skeleton className="w-2/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
        <Skeleton className="w-3/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
        <Skeleton className="w-4/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
        <Skeleton className="w-2/5 rounded-lg h-3 !bg-primary-900/50"></Skeleton>
      </div>
    </Card>
  );
}

export function AnimeSkeletonGrid() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Skeleton className="rounded-full h-8 w-[200px] !bg-primary-500/20"></Skeleton>

      <div className="flex items-center md:grid grid-cols-9 md:grid-cols-5 gap-4 w-full whitespace-nowrap">
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
        <AnimeCardSkeleton />
      </div>
    </div>
  );
}

export default function AnimeSkeletonGridList() {
  return (
    <div className="flex flex-col gap-8 h-screen overflow-hidden">
      <AnimeSkeletonGrid />
      <AnimeSkeletonGrid />
    </div>
  );
}
