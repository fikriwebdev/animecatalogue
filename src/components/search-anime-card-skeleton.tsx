import { Card, Skeleton } from "@nextui-org/react";

export default function SearchAnimeCardSkeleton() {
  return (
    <Card className="w-full h-[210px] bg-primary-800">
      <Skeleton className="w-full h-1/2 object-cover object-center rounded-none !bg-primary-950/20" />
      <div className="mt-4 flex flex-col gap-2 px-4">
        <Skeleton className="w-full h-3 rounded-full !bg-primary-950/20" />
        <Skeleton className="w-3/5 h-3 rounded-full !bg-primary-950/20" />
        <Skeleton className="w-4/5 h-3 rounded-full !bg-primary-950/20" />
      </div>
    </Card>
  );
}
