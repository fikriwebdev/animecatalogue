import { Skeleton } from "@nextui-org/react";
import AnimeSkeletonGridList from "./anime-skeleton-grid-list";

export default function AnimeDetailSkeleton() {
  return (
    <div className="h-screen overflow-hidden w-full">
      <div className="flex flex-col md:grid grid-cols-12 gap-4 mb-4 p-4">
        <div className="col-span-3 w-full">
          <Skeleton className="w-full h-[250px] md:h-[350px] rounded-md !bg-primary-900/50" />
        </div>
        <div className="col-span-9">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-4 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-3/4 h-4 rounded-full !bg-primary-900/50" />
          </div>
          <div className="flex items-center gap-2 my-4 text-sm md:text-base">
            <Skeleton className="w-[100px] h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-[100px] h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-[100px] h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-[100px] h-3 rounded-full !bg-primary-900/50" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-4/5 h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-3/5 h-3 rounded-full !bg-primary-900/50" />
            <Skeleton className="w-2/5 h-3 rounded-full !bg-primary-900/50" />
          </div>
        </div>
      </div>
      <AnimeSkeletonGridList />
    </div>
  );
}
