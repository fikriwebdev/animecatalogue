import { Result } from "@/libs/get-top-anime";
import { clsm } from "@/utils/clsm";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Star } from "lucide-react";
import { Gasoek_One } from "next/font/google";
import Link from "next/link";
import React from "react";

type AnimeCardProps = Result["animes"][0];

export default function AnimeCard({
  image,
  title,
  info,
  rating,
  href,

  rank,
}: AnimeCardProps) {
  return (
    <Link href={href}>
      <Card
        className="w-full h-[300px] md:h-[350px] opacity-100  hover:opacity-75 !transition-opacity duration-500"
        isFooterBlurred
      >
        <Image
          src={image}
          className="object-cover object-top w-full h-full z-0"
          alt={title}
          removeWrapper
        />

        <CardFooter className="absolute bg-slate-900/50 bottom-0 border-t-1 border-slate-100/20 z-10 justify-between h-16 w-full">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-xs line-clamp-2">{title}</p>
              {info ? <p className="text-xs">{info.eps}</p> : null}
            </div>
            {rating ? (
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" />
                <p>{rating}</p>
              </div>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
