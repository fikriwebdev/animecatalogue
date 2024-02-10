import getGenres from "@/libs/get-genres";
import GenreCard from "./components/genre-card";

export default async function ViewGenres() {
  const genres = await getGenres();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">All Anime Genres</h1>
      </div>
      <div className="mt-4">
        {genres.map((genre) => (
          <div key={genre.title} className="mb-8">
            <h2 className="font-semibold border-b border-primary pb-1">
              {genre.title}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
              {genre.items.map((item) => (
                <GenreCard key={item.href} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
