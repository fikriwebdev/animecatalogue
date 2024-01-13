"use client";

import { type Result } from "@/libs/getTopAnime";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { clsm } from "@/utils/clsm";
import { Gasoek_One } from "next/font/google";
import { A11y, Navigation } from "swiper/modules";
import React from "react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
            <Link href={item.href}>
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

                <CardFooter className="absolute bg-slate-900/50 bottom-0 border-t-1 border-slate-100/20 z-10 justify-between h-16 w-full">
                  <div className="flex items-center gap-4 justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-xs line-clamp-2">
                        {item.title}
                      </p>
                      {item.info ? (
                        <p className="text-xs">{item.info.eps}</p>
                      ) : null}
                    </div>
                    {item.rating ? (
                      <div className="flex items-center gap-2">
                        <Star className="text-yellow-500 fill-yellow-500" />
                        <p>{item.rating}</p>
                      </div>
                    ) : null}
                  </div>
                </CardFooter>
              </Card>
            </Link>
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
