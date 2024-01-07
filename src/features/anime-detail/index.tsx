import { AnimeDetailResult } from "@/libs/getAnimeDetail";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import React from "react";

export default function ViewAnimeDetail({ data }: { data: AnimeDetailResult }) {
  const { poster, jp_title, season, synopsis, statistics, characters } = data;

  console.log(characters);

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-3">
          <Image
            src={poster}
            alt={jp_title}
            className="w-full h-[350px] rounded-md object-cover object-center"
          />
        </div>
        <div className="col-span-9">
          <h1 className="text-4xl font-semibold mb-4">{jp_title}</h1>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-base ">{season}</p>
            <p>|</p>
            <p>Rank: {statistics.ranked}</p>
            <p>Popularity: {statistics.popularity}</p>
            <p>Favorites: {statistics.favorites}</p>
          </div>
          <p className="text-sm font-light">{synopsis}</p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold  mb-6">Characters</h1>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {characters.map((character) => (
            <Card key={character.char_name} className="h-[300px]">
              <div className="grid grid-cols-2 h-1/2">
                <Image
                  src={character.char_img}
                  alt={character.char_name}
                  className="w-full h-full object-cover object-center"
                  removeWrapper
                  radius="none"
                />
                <Image
                  src={character.voice_char_img}
                  alt={character.voice_char_name}
                  className="w-full h-full object-cover object-center"
                  removeWrapper
                  radius="none"
                />
              </div>
              <CardFooter>
                <h1>{character.char_name}</h1>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
