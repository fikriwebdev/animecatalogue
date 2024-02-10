import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

function ReviewSkeleton() {
  return (
    <Card className="h-[200px] w-full bg-primary-800 p-4">
      <div className="flex items-center gap-4 w-full">
        <Skeleton className="w-10 h-10 rounded-full !bg-primary-900/50" />
        <div className="flex flex-col gap-4 w-full">
          <Skeleton className="w-3/5 h-3 rounded-full !bg-primary-900/50" />
          <Skeleton className="w-2/5 h-3 rounded-full !bg-primary-900/50" />
        </div>
      </div>
      <div className="flex mt-4 items-center w-full gap-4">
        <Skeleton className="w-[80px] h-[100px]  rounded-lg !bg-primary-900/50" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-3 rounded-full !bg-primary-900/50" />
          <Skeleton className="w-4/5 h-3 rounded-full !bg-primary-900/50" />
          <Skeleton className="w-3/5 h-3 rounded-full !bg-primary-900/50" />
          <Skeleton className="w-2/5 h-3 rounded-full !bg-primary-900/50" />
        </div>
      </div>
    </Card>
  );
}

export default function ReviewSkeletonGridList() {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-4 w-[100px] rounded-full !bg-primary-900/50" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-[100px] h-4 rounded-lg !bg-primary-900/50" />
          <Skeleton className="w-[100px] h-4 rounded-lg !bg-primary-900/50" />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <ReviewSkeleton />
        <ReviewSkeleton />
        <ReviewSkeleton />
        <ReviewSkeleton />
      </div>
    </div>
  );
}
