import getAnimeBySeason from "@/libs/get-anime-by-season";
import SeasonAnimeCard from "./season-anime-card";

type SeasonAnimeGridListProps = {
  tab: string;
};

export default async function SeasonAnimeGridList({
  tab,
}: SeasonAnimeGridListProps) {
  const animeSeason = await getAnimeBySeason(tab);

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {animeSeason.map((anime) => (
        <SeasonAnimeCard key={anime.title} {...anime} />
      ))}
    </div>
  );
}
