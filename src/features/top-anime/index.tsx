import AnimeCard from "@/components/anime-card";
import { getTopAnime } from "@/libs/get-top-anime";
import PaginationButton from "./components/pagination-button";

type ViewTopAnimeProps = {
  page: string;
};

export default async function ViewTopAnime({ page }: ViewTopAnimeProps) {
  const topAnime = await getTopAnime("bypopularity", +page);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold ">Top Anime Series</h1>
        <PaginationButton hasNextPage={!!topAnime.hasNextPage} />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {topAnime.animes.map((anime) => (
          <div className="relative" key={anime.title}>
            <div className="absolute top-0 left-0 z-[1] rounded-br-lg">
              <div className="bg-secondary/80  text-white text-3xl font-semibold min-w-10 flex items-center justify-center rounded-br-lg px-4 py-1">
                {anime.rank}
              </div>
            </div>
            <AnimeCard {...anime} />
          </div>
        ))}
      </div>
    </>
  );
}
