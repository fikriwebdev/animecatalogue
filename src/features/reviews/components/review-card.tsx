"use client";

import { type Review } from "@/libs/get-reviews";
import { Avatar, Chip, ChipProps, Image } from "@nextui-org/react";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const getChipColor = (sentimen: string): ChipProps["color"] => {
  switch (sentimen) {
    case "Not Recommended":
      return "danger";
    case "Recommended":
      return "success";
    case "Mixed Feelings":
      return "warning";
    default:
      return "default";
  }
};

export default function ReviewCard({
  anime,
  date,
  sentimen,
  review,
  user,
}: Review) {
  return (
    <div className="w-full bg-primary rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={user.image} name={user.username} />
          <div>
            <p className="text-primary-100">{user.username}</p>
            <Link href={anime.href} className="group">
              <p className="text-primary-100 text-sm group-hover:underline">
                {anime.title}
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Chip
            color={getChipColor(sentimen)}
            variant="shadow"
            startContent={<Star className="w-4 h-4 mr-1" />}
            size="sm"
            className="text-white"
          >
            {sentimen}
          </Chip>
          <p className="font-light text-sm mt-2">{date}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex mt-4 items-center gap-2">
          <Image
            src={anime.image}
            alt={anime.title}
            removeWrapper
            className="w-20 h-20 !rounded-sm"
          />
          <p className="line-clamp-4 text-sm font-light text-primary-100">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
}
