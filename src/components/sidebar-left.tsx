"use client";

import Image from "next/image";
import Link from "next/link";
import ListMenu from "./list-menu";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 p-4">
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
    </Link>
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
