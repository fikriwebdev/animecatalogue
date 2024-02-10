import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

function AnimeCardSkeleton() {
  return (
    <Card className="w-full space-y-5 p-4 bg-primary-800 h-[300px]" radius="lg">
      <Skeleton className="rounded-lg w-full h-24 !bg-primary-900/50"></Skeleton>
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
      <div className="grid grid-cols-5 gap-4">
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
