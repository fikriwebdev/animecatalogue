import { GenreItem } from "@/libs/get-genres";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import React from "react";
import NextImage from "next/image";

type GenreCardProps = GenreItem;

const images = [
  "/assets/images/jjk.jpg",
  "/assets/images/kny.jpg",
  "/assets/images/spy.jpg",
];

export default function GenreCard({ label, href }: GenreCardProps) {
  return (
    <Link href={href}>
      <div className="w-full h-20 p-4  border border-white/50 rounded-lg flex items-center justify-center text-center text-sm  relative overflow-hidden">
        <div className="absolute w-full h-full inset-0 backdrop-blur-md bg-white/10 z-[2]"></div>
        <p className="absolute z-[3] max-w-[90%]">{label}</p>
        <Image
          as={NextImage}
          src={images[0]}
          alt={label}
          removeWrapper
          className="w-full object-cover object-center h-full absolute right-0 z-[1] !opacity-40 bg-red-500"
          fill
        />
      </div>
    </Link>
  );
}
