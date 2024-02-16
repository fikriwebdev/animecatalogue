import getAvailableSeasons from "@/libs/get-available-seasons";
import SeasonAnimeGridList from "./components/season-anime-grid-list";
import SeasonTabs from "./components/season-tabs";

type ViewSeasonAnime = {
  tab: string;
};

export default async function ViewSeasonAnime({ tab }: ViewSeasonAnime) {
  const seasons = await getAvailableSeasons();

  const defaulTab = seasons.filter((season) => season.isDefault)[0];

  return (
    <div className="p-4">
      <SeasonTabs tabs={seasons} />
      <SeasonAnimeGridList tab={tab || defaulTab.href} />
    </div>
  );
}
