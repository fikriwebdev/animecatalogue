"use client";

import {
  BellPlus,
  Home,
  LayoutList,
  Leaf,
  MessageCircleHeart,
  Ship,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import ListMenu from "./list-menu";

const menu = [
  {
    label: "Menu",
    items: [
      {
        icon: <Home />,
        title: "Home",
        href: "/",
      },
      {
        icon: <ThumbsUp />,
        title: "Top Anime Series",
        href: "/top-anime",
      },
      {
        icon: <Ship />,
        title: "Top Airing Anime",
        href: "/top-airing",
      },
      {
        icon: <Sparkles />,
        title: "Most Popular",
        href: "/popular",
      },
      {
        icon: <Star />,
        title: "Most Favorited",
        href: "/favorite",
      },
    ],
  },
  {
    label: "Categories",
    items: [
      {
        icon: <Leaf />,
        title: "Seasonal Anime",
        href: "/season",
      },
      {
        icon: <LayoutList />,
        title: "Genres",
        href: "/genres",
      },
    ],
  },
  {
    label: "General",
    items: [
      {
        icon: <MessageCircleHeart />,
        title: "Reviews",
        href: "/reviews",
      },
      {
        icon: <BellPlus />,
        title: "New Anime Added",
        href: "/new-anime",
      },
    ],
  },
];

const Logo = () => {
  return (
    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent p-4">
      MyAnimeRank
    </h1>
  );
};

export default function SidebarLeft() {
  return (
    <aside className="hidden md:block col-span-2 border-r-2 border-slate-800 h-screen sticky left-0 top-0">
      <Logo />
      <ListMenu />
    </aside>
  );
}
