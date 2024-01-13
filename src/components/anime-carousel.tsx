"use client";

import { type Result } from "@/libs/get-top-anime";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { clsm } from "@/utils/clsm";
import React from "react";
import { A11y, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AnimeCard from "./anime-card";
import { Gasoek_One } from "next/font/google";

const GasoekOne = Gasoek_One({ subsets: ["latin"], weight: ["400"] });

type AnimeCarouselProps = {
  anime: Result;
  title: string;
  withRanking?: boolean;
};

export default function AnimeCarousel({
  anime,
  title,
  withRanking,
}: AnimeCarouselProps) {
  const navPrevRef = React.useRef<HTMLButtonElement>(null);
  const navNextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <h1 className="text-3xl font-semibold  mb-6">{title}</h1>
      <Swiper
        className="mb-8 [&>.swiper-button-disabled]:hidden overflow-visible"
        slidesPerView={withRanking ? 4.3 : 5}
        spaceBetween={withRanking ? 16 : 24}
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
        {anime.animes.map((item) => (
          <SwiperSlide
            key={item.title}
            className={clsm(
              "relative overflow-visible",
              withRanking ? "pl-8" : ""
            )}
          >
            {withRanking ? (
              <p
                className={clsm(
                  "absolute text-8xl left-0 top-1/2 z-10 stroke-1 shadow-inner text-gray-50 select-none -translate-y-1/2",
                  GasoekOne.className
                )}
                style={{
                  textShadow:
                    "-1px -1px 0 #475569, 1px -1px 0 #475569, -1px 1px 0 #475569, 1px 1px 0 #475569",
                }}
              >
                {item.rank}
              </p>
            ) : null}
            <AnimeCard {...item} />
          </SwiperSlide>
        ))}
        <>
          {withRanking ? null : (
            <>
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
            </>
          )}
        </>
      </Swiper>
    </div>
  );
}
