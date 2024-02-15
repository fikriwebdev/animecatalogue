import ViewFavoriteAnime from "@/features/favorite";
import type { Metadata } from "next";
import React from "react";
import { defaultTitle } from "../layout";

export const metadata: Metadata = {
  title: `${defaultTitle} - Most Favorited Anime`,
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
  keywords: ["anime", "manga", "anime movie", "anime rank"],
};

type FavoriteAnimeProps = {
  searchParams: {
    page: string;
  };
};

export default function FavoriteAnime({ searchParams }: FavoriteAnimeProps) {
  return <ViewFavoriteAnime page={searchParams.page || "1"} />;
}
