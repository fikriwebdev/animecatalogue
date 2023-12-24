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
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      MLACLONE
    </h1>
  );
};

export default function SidebarLeft() {
  const pathname = usePathname();

  return (
    <aside className="col-span-2 border-r-2 border-slate-800 h-screen sticky left-0 top-0">
      <Logo />
      <div className="flex flex-col gap-12 mt-8">
        {menu.map((item) => (
          <div className="pl-4" key={item.label}>
            <h2 className="text-xl font-semibold mb-4">{item.label}</h2>
            <ul className="flex flex-col gap-4">
              {item.items.map((child) => (
                <li
                  key={child.href}
                  className="flex items-center  group"
                  data-active={pathname === child.href}
                >
                  <Link
                    href={child.href}
                    className="flex items-center gap-4 text-slate-300 hover:text-secondary group-data-[active=true]:text-secondary"
                  >
                    {child.icon}
                    <p>{child.title}</p>
                  </Link>
                  <div className="w-1 h-8 rounded-full overflow-hidden  justify-center items-center bg-slate-950 -mr-[3px] hidden group-data-[active=true]:flex absolute right-0">
                    <div className="bg-secondary w-full h-[60%] rounded-full"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
