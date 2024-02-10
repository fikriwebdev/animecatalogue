import getAvailableSeasons from "@/libs/get-available-seasons";
import React, { Suspense } from "react";
import SeasonTabs from "./components/season-tabs";
import SeasonAnimeGridList from "./components/season-anime-grid-list";
import AnimeSkeletonGridList from "@/components/anime-skeleton-grid-list";

type ViewSeasonAnime = {
  tab: string;
};

export default async function ViewSeasonAnime({ tab }: ViewSeasonAnime) {
  const seasons = await getAvailableSeasons();

  const defaulTab = seasons.filter((season) => season.isDefault)[0];

  return (
    <Suspense fallback={<AnimeSkeletonGridList />}>
      <div className="p-4">
        <SeasonTabs tabs={seasons} />
        <SeasonAnimeGridList tab={tab || defaulTab.href} />
      </div>
    </Suspense>
  );
}
