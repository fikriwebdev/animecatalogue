import React from "react";

import * as cheerio from "cheerio";

export type GenreItem = {
  label: string;
  href: string;
};

export type Genre = {
  title: string;
  items: GenreItem[];
};

export type GenresResult = Genre[];

export default async function getGenres(): Promise<GenresResult> {
  const response = await fetch(`https://myanimelist.net/anime.php`);
  const genresText = await response.text();

  const $ = cheerio.load(genresText);

  const genres = $(".anime-manga-search .normal_header")
    .toArray()
    .map((el, index) => {
      const $div = cheerio.load(el);

      const title = $div.text().replace("View More", "");
      //   const items = $div('.genre-link').eq(index).children()
      const items = $(`.anime-manga-search .genre-link`)
        .eq(index)
        .children()
        .toArray()
        .flatMap((item) => {
          const $col = cheerio.load(item);

          const genre = $col(".genre-list")
            .toArray()
            .flatMap((al) => {
              const $al = cheerio.load(al);

              const label = $al("a").text();
              const hrefAttr = $al("a").attr();
              const href = hrefAttr
                ? hrefAttr["href"].replace("/anime", "")
                : "";

              return {
                label,
                href,
              };
            });
          return genre;
        });

      return { title, items };
    });

  return genres;
}
