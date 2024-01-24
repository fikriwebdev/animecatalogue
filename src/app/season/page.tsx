import ViewSeasonAnime from "@/features/season";
import React from "react";

type SeasonAnimeProps = {
  searchParams: {
    tab: string;
  };
};

export default function SeasonAnime({ searchParams }: SeasonAnimeProps) {
  return <ViewSeasonAnime tab={searchParams.tab || ""} />;
}
