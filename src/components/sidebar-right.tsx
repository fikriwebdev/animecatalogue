import getLatestUpdatedAnime from "@/libs/get-latest-updated-anime";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Search } from "lucide-react";
import UpdatedAnimeCard from "./updated-anime-card";
import Link from "next/link";

export default async function SidebarRight() {
  const latestUpdatedAnime = await getLatestUpdatedAnime();

  return (
    <aside className="hidden md:block col-span-2 border-l border-2 border-slate-800  h-screen sticky right-0 top-0">
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
          <UpdatedAnimeCard key={anime.href} {...anime} />
        ))}
      </div>
      <Link className="flex justify-center" href="/new-anime">
        <Button className="mt-4 mx-4">See More</Button>
      </Link>
    </aside>
  );
}
