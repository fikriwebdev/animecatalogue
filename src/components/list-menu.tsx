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

type ListMenuProps = {
  onClose?: () => void;
};

export default function ListMenu({ onClose }: ListMenuProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col gap-12 mt-4 md:mt-8">
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
                    onClick={() => {
                      if (onClose) {
                        onClose();
                      }
                    }}
                    className="flex items-center gap-4 text-slate-300 hover:text-secondary group-data-[active=true]:text-secondary"
                  >
                    {child.icon}
                    <p>{child.title}</p>
                  </Link>
                  <div className="w-1 h-8 rounded-full overflow-hidden  justify-center items-center bg-transparent md:bg-slate-950 -mr-[3px] hidden group-data-[active=true]:flex absolute right-1 md:right-0">
                    <div className="bg-secondary w-full h-[60%] rounded-full"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="absolute bottom-4 px-4 text-primary-500 text-sm">
        Made with ❤️ by Fikri
      </p>
    </>
  );
}
