"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { type SlideAnimeResult } from "@/libs/get-upcoming-anime";

import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type SlideAnimeCarouselProps = {
  anime: SlideAnimeResult;
};

export default function UpcomingAnimeCarousel({
  anime,
}: SlideAnimeCarouselProps) {
  const navPrevRef = React.useRef<HTMLButtonElement>(null);
  const navNextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1 className="text-3xl font-semibold  mb-6">{anime.title}</h1>
      <Swiper
        className="mb-8 [&>.swiper-button-disabled]:hidden"
        slidesPerView={5}
        spaceBetween={24}
        modules={[Navigation, A11y]}
        loop={false}
        centeredSlides={false}
        navigation={{
          nextEl: "next-slide",
          prevEl: "prev-slide",
        }}
        onLoad={() => console.log("Loaded")}
        onSwiper={(swiper) => {
          // Override prevEl & nextEl now that refs are defined

          if (swiper.params.navigation && swiper.params.navigation) {
            //@ts-ignore
            swiper.params.navigation.prevEl = navPrevRef.current;
            //@ts-ignore
            swiper.params.navigation.nextEl = navNextRef.current;
          }

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {anime.anime.map((item) => (
          <SwiperSlide key={item.href} className="relative">
            <Link href={item.href}>
              <Card
                className="w-full h-[350px] opacity-100  hover:opacity-75 !transition-opacity duration-500"
                isFooterBlurred
              >
                <Image
                  src={item.image}
                  className="object-cover object-top w-full h-full z-0"
                  alt={item.title}
                  removeWrapper
                />
                <CardFooter className="absolute bg-slate-900/50 bottom-0 border-t-1 border-slate-100/20 z-10 justify-between h-14">
                  <p className="font-semibold text-xs line-clamp-3">
                    {item.title}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
        <Button
          className="prev-slide absolute left-8 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          isIconOnly
          radius="full"
          color="secondary"
          ref={navPrevRef}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="next-slide absolute right-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          isIconOnly
          radius="full"
          color="secondary"
          ref={navNextRef}
        >
          <ChevronRight />
        </Button>
      </Swiper>
    </div>
  );
}
