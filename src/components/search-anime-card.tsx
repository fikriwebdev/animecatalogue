import { type AnimeQueryResult } from "@/libs/get-anime-by-query";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Star } from "lucide-react";

import Link from "next/link";

export default function SearchAnimeCard({
  href,
  title,
  img,
  eps,
  rating,
  type,
}: AnimeQueryResult) {
  return (
    <Link href={href} key={title}>
      <Card className="w-full h-[210px] bg-primary-800">
        <Image
          src={img}
          className="w-full h-1/2 object-cover object-center rounded-none"
          alt={title}
          removeWrapper
        />
        <p className="line-clamp-2 text-xs m-4">{title}</p>
        <CardFooter className="absolute bottom-0 ">
          <div className="flex flex-col gap-1 text-xs px-1">
            <div className="flex items-center justify-between w-full">
              <p>{type}</p>
              <p>({eps} eps)</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500 w-3 h-3" />
              <p>{rating}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
