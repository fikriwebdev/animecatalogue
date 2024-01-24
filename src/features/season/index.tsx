import getAvailableSeasons from "@/libs/get-available-seasons";
import React from "react";
import SeasonTabs from "./components/season-tabs";
import SeasonAnimeGridList from "./components/season-anime-grid-list";

type ViewSeasonAnime = {
  tab: string;
};

export default async function ViewSeasonAnime({ tab }: ViewSeasonAnime) {
  const seasons = await getAvailableSeasons();

  const defaulTab = seasons.filter((season) => season.isDefault)[0];

  return (
    <div>
      <SeasonTabs tabs={seasons} />
      <SeasonAnimeGridList tab={tab || defaulTab.href} />
    </div>
  );
}
