import { type AnimeQueryResult } from "@/libs/get-anime-by-query";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Star } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";

export default function SearchAnimeCard({
  href,
  title,
  img,
  eps,
  rating,
  type,
  onClose,
}: AnimeQueryResult & { onClose?: () => void }) {
  return (
    <Link
      href={href}
      key={title}
      onClick={() => {
        if (onClose) {
          onClose();
        }
      }}
    >
      <Card className="w-full h-[210px] bg-primary-800 relative">
        <div className="w-full h-1/2 relative">
          <Image
            src={img}
            className="object-cover object-center rounded-none"
            alt={title}
            removeWrapper
          />
        </div>
        <p className="line-clamp-2 text-xs m-4">{title}</p>
        <CardFooter className="absolute bottom-0 ">
          <div className="flex flex-col gap-1 text-xs px-1">
            <div className="flex items-center justify-between w-full">
              <p>{type}</p>
              <p>({eps} eps)</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 -yellow-500 w-3 h-3" />
              <p>{rating}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
