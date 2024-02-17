import SeasonAnimeCard from "@/components/season-anime-card";
import getAnimeByGenre from "@/libs/get-anime-by-genre";
import Pagination from "../_components/pagination";
import { Suspense } from "react";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";
import Breadcrumbs from "@/components/breadcrumbs";

type GenresProps = {
  params: {
    id: string;
    name: string;
  };
  searchParams: {
    page: string;
  };
};

const MainContent = async ({ path, page }: { path: string; page: number }) => {
  const genre = await getAnimeByGenre(path);

  return (
    <div className="p-4">
      <div className="mt-8 mb-4">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Genre",
              href: "/genre",
            },
            {
              label: genre.title,
              href: "/",
            },
          ]}
        />
      </div>
      <h1 className="text-xl md:text-xl font-semibold ">{genre.title}</h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {genre.anime.map((anime) => (
          <SeasonAnimeCard key={anime.title} {...anime} />
        ))}
      </div>
      <Pagination page={page} totalPage={+genre.totalPage} />
    </div>
  );
};

export default async function Genres({ params, searchParams }: GenresProps) {
  const page = +searchParams.page || 1;

  const path = `/${params.id}/${params.name}/?page=${page}`;

  return (
    <Suspense key={path} fallback={<AnimeSkeletonGridList />}>
      <MainContent path={path} page={page} />
    </Suspense>
  );
}
