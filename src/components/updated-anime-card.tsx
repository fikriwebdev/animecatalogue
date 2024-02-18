import { type LatestUpdateAnime } from "@/libs/get-latest-updated-anime";
import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Crown } from "lucide-react";
import NextImage from "next/image";

import Link from "next/link";
import React from "react";

export default function UpdatedAnimeCard({
  href,
  title,
  image,
  episode,
}: LatestUpdateAnime) {
  return (
    <Link href={href} key={title}>
      <Card className="w-full h-[210px] bg-primary-800">
        <div className="w-full h-1/2 relative">
          <Image
            src={image}
            className="w-full h-1/2 object-cover object-center rounded-none"
            alt={title}
            removeWrapper
          />
        </div>
        <p className="line-clamp-3 text-xs m-4">{title}</p>
        <CardFooter className="absolute bottom-0">
          <div>
            <Chip
              color="secondary"
              variant="solid"
              size="sm"
              endContent={
                episode.isPremium ? (
                  <Crown className="w-4 h-4 text-yellow-500 ml-2" />
                ) : null
              }
            >
              {episode.number}
            </Chip>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
