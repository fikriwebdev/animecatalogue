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
  const {
    poster,
    jp_title,
    season,
    synopsis,
    statistics,
    characters,
    staffs,
    recommendations,
  } = data;

  console.log(recommendations);

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
            <Card
              key={character.char_name}
              className="h-[300px] bg-primary-800"
            >
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
              <CardBody className="mt-10">
                <p>{character.voice_char_name} as</p>
                <p>{character.char_name}</p>
                <p className="text-sm text-primary-500">{character.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold  mb-6">Staff</h1>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {staffs.map((staff) => (
            <Card key={staff.char_name} className="h-[300px] bg-primary-800">
              <Image
                src={staff.char_img}
                alt={staff.char_name}
                className="w-full h-[70%] object-cover object-center"
                removeWrapper
                radius="none"
              />

              <CardBody className="mt-4">
                <p>{staff.char_name}</p>
                <p className="text-sm text-primary-500">{staff.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold  mb-6">Recommendations</h1>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {staffs.map((staff) => (
            <Card key={staff.char_name} className="h-[300px] bg-primary-800">
              <Image
                src={staff.char_img}
                alt={staff.char_name}
                className="w-full h-[70%] object-cover object-center"
                removeWrapper
                radius="none"
              />

              <CardBody className="mt-4">
                <p>{staff.char_name}</p>
                <p className="text-sm text-primary-500">{staff.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
