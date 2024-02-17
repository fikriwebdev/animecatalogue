import SeasonAnimeCard from "@/components/season-anime-card";
import getAnimeByGenre from "@/libs/get-anime-by-genre";
import Pagination from "../_components/pagination";

type GenresProps = {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
};

export default async function Genres({ params, searchParams }: GenresProps) {
  const page = +searchParams.page || 1;

  const genre = await getAnimeByGenre(`/${params.id}/?page=${page}`);

  return (
    <div className="p-4">
      <h1 className="text-xl md:text-xl font-semibold ">{genre.title}</h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {genre.anime.map((anime) => (
          <SeasonAnimeCard key={anime.title} {...anime} />
        ))}
      </div>
      <Pagination page={page} totalPage={+genre.totalPage} />
    </div>
  );
}
