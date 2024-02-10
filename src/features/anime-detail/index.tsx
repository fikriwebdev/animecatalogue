import AnimeCarousel from "@/components/anime-carousel";
import AnimeDetailSkeleton from "@/components/anime-detail-skeleton";
import { AnimeDetailResult } from "@/libs/get-anime-detail";
import { Card, CardBody, Chip, Image } from "@nextui-org/react";
import { Suspense } from "react";

type ViewAnimeDetailProps = {
  data: AnimeDetailResult;
  params: {
    id: string;
    name: string;
  };
};

export default function ViewAnimeDetail({
  data,
  params,
}: ViewAnimeDetailProps) {
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

  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-12 gap-4 mb-4 p-4">
        <div className="col-span-3 w-full">
          <Image
            src={poster}
            alt={jp_title}
            className="w-full h-[250px] md:h-[350px] rounded-md object-cover object-center"
            removeWrapper
          />
        </div>
        <div className="col-span-9">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {jp_title}
          </h1>
          <div className="flex items-center gap-2 mb-4 text-sm md:text-base">
            <p>{season}</p>

            <div>
              Rank:{" "}
              <Chip color="default" className="text-white" variant="flat">
                {statistics.ranked}
              </Chip>
            </div>
            <div>
              popularity:{" "}
              <Chip color="success" className="text-white" variant="flat">
                {statistics.popularity}
              </Chip>
            </div>
            <div>
              Favorites:{" "}
              <Chip color="warning" className="text-white" variant="flat">
                {statistics.favorites ? statistics.favorites : "Not available"}
              </Chip>
            </div>
          </div>
          <p className="text-sm font-light">{synopsis}</p>
        </div>
      </div>
      <div className="mt-8 px-4">
        <h1 className="text-3xl font-semibold  mb-6">Characters</h1>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
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
              <CardBody className="mt-2 md:mt-10">
                <p>{character.voice_char_name} as</p>
                <p>{character.char_name}</p>
                <p className="text-sm text-primary-500">{character.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-8 px-4">
        <h1 className="text-3xl font-semibold  mb-6">Staff</h1>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
          {staffs.map((staff) => (
            <Card key={staff.char_name} className="h-[300px] bg-primary-800">
              <Image
                src={staff.char_img}
                alt={staff.char_name}
                className="w-full h-[70%] object-cover object-center"
                removeWrapper
                radius="none"
              />

              <CardBody className="mt-2 md:mt-1">
                <p>{staff.char_name}</p>
                <p className="text-sm text-primary-500">{staff.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <AnimeCarousel
          title="Recommendations"
          anime={{
            animes: recommendations,
          }}
        />
      </div>
    </div>
  );
}
