import ViewFavoriteAnime from "@/features/favorite";
import React from "react";

type FavoriteAnimeProps = {
  searchParams: {
    page: string;
  };
};

export default function FavoriteAnime({ searchParams }: FavoriteAnimeProps) {
  return <ViewFavoriteAnime page={searchParams.page || "1"} />;
}
