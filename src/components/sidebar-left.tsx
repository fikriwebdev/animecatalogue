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
import Image from "next/image";

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
    <div className="flex items-center gap-2 p-4">
      <Image
        src="/assets/images/logo.png"
        width={48}
        height={48}
        alt="Anime Catalogue"
        style={{
          borderRadius: 999,
          overflow: "hidden",
        }}
      />
      <h1 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent leading-5">
        Anime <br /> Catalogue
      </h1>
    </div>
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
