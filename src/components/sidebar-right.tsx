import getLatestUpdatedAnime from "@/libs/getLatestUpdatedAnime";
import { Input } from "@nextui-org/input";
import { Button, Card, CardFooter, Chip, Image } from "@nextui-org/react";
import { Crown, Search } from "lucide-react";
import Link from "next/link";

export default async function SidebarRight() {
  const latestUpdatedAnime = await getLatestUpdatedAnime();

  return (
    <aside className="col-span-2 border-l border-2 border-slate-800  h-screen sticky right-0 top-0">
      <div className="px-4 mt-4">
        <Input
          classNames={{
            inputWrapper:
              "bg-primary-800 group-data-[hover=true]:bg-primary-700 group-data-[focus=true]:bg-primary-700",
          }}
          startContent={<Search />}
          placeholder="Type to search"
          radius="full"
          size="sm"
        />
      </div>
      <h1 className="my-4 px-4 font-semibold">Latest Update Anime</h1>
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        {latestUpdatedAnime.slice(0, 6).map((anime) => (
          <Link href={anime.href} key={anime.title}>
            <Card className="w-full h-[210px] bg-primary-800">
              <Image
                src={anime.image}
                className="w-full h-1/2 object-cover object-center rounded-none"
                alt={anime.title}
                removeWrapper
              />
              <p className="line-clamp-3 text-xs m-4">{anime.title}</p>
              <CardFooter className="absolute bottom-0">
                <div>
                  <Chip
                    color="secondary"
                    variant="solid"
                    size="sm"
                    endContent={
                      anime.episode.isPremium ? (
                        <Crown className="w-4 h-4 text-yellow-500 ml-2" />
                      ) : null
                    }
                  >
                    {anime.episode.number}
                  </Chip>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 mx-4">See More</Button>
      </div>
    </aside>
  );
}
