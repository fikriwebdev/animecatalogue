"use client";

import { AnimeSeason } from "@/libs/get-anime-by-season";
import { Chip, Image } from "@nextui-org/react";
import { Calendar, Play, Star } from "lucide-react";
import Link from "next/link";

export default function SeasonAnimeCard({
  title,
  image,
  synopsis,
  date,
  episode,
  genre,
  properties,
  rating,
  href,
}: AnimeSeason) {
  return (
    <Link href={href}>
      <div className="w-full h-[500px] bg-primary rounded-lg overflow-hidden relative group">
        <Image
          src={image}
          className="w-full h-full object-cover object-center rounded-none z-[1] group-hover:scale-110 !transition-transform duration-500"
          alt={title}
          removeWrapper
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent  to-black/100 bottom-0 z-[2] p-2"></div>
        <div className="absolute bottom-4 p-2 w-full z-[3]">
          <div className="mb-auto">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="line-clamp-3 mt-2 text-sm font-light">{synopsis}</p>
            <div className="flex items-center gap-2 text-sm font-light mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <p>{date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <p>{rating}</p>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <p>{episode}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap mt-4">
              {genre.map((item) => (
                <Chip size="sm" key={item} variant="faded">
                  {item}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
