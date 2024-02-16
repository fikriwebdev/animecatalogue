import { Result } from "@/libs/get-top-anime";
import { clsm } from "@/utils/clsm";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Star } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";

type AnimeCardProps = Result["animes"][0] & {
  containerClassname?: string;
};

export default function AnimeCard({
  image,
  title,
  info,
  rating,
  href,
  containerClassname,
}: AnimeCardProps) {
  return (
    <Link href={href}>
      <Card
        className={clsm(
          "w-full h-[300px] relative md:h-[350px] opacity-100  hover:opacity-75 !transition-opacity duration-500",
          containerClassname
        )}
        isFooterBlurred
      >
        <Image
          as={NextImage}
          src={image}
          className="object-cover object-top w-full h-full z-0"
          alt={title}
          removeWrapper
          fill
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
