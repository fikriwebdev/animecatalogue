import getHref from "@/utils/get-href";
import * as cheerio from "cheerio";

type Property = {
  caption: string;
  item: string;
};

export type AnimeGenre = {
  title: string;
  episode: string;
  date: string;
  genre: string[];
  image: string;
  synopsis: string;
  properties: Property[];
  rating: string;
  href: string;
};

export type AnimeGenreResult = {
  title: string;
  anime: AnimeGenre[];
  totalPage: string;
};

export default async function getAnimeByGenre(
  path: string
): Promise<AnimeGenreResult> {
  const response = await fetch(`https://myanimelist.net/anime/genre${path}`);
  const genreAnimeText = await response.text();

  const $ = cheerio.load(genreAnimeText);

  const title = $(".js-search-filter-block>span").text().trim();

  const anime: AnimeGenre[] = $(
    ".seasonal-anime-list .js-anime-category-producer"
  )
    .toArray()
    .map((el) => {
      const $div = cheerio.load(el);

      const title = $div(".h2_anime_title").text();
      const date = $div(".info .item").eq(0).text().trim();
      const episode = $div(".info .item").eq(1).text().trim();
      const genre = $div(".genre")
        .toArray()
        .map((span) => {
          const $span = cheerio.load(span);
          return $span.text().trim();
        });
      const imageAttr = $div(".image img").attr();

      let imageSrc = "";

      if (imageAttr) {
        if (imageAttr["data-src"]) {
          imageSrc = imageAttr["data-src"];
        } else {
          imageSrc = imageAttr["src"];
        }
      }

      const synopsis = $div(".synopsis .preline").text().trim();
      const properties = $div(".synopsis .properties .property")
        .toArray()
        .map((property) => {
          const $property = cheerio.load(property);

          return {
            caption: $property(".caption").text().trim(),
            item: $property(".item").text().trim(),
          };
        });

      const rating = $div(".score-label").text().trim();
      const hrefAttr = $div(".h2_anime_title a").attr();
      const href = getHref(hrefAttr ? hrefAttr["href"] : "");

      return {
        title,
        date,
        episode,
        genre,
        image: imageSrc,
        synopsis,
        properties,
        rating,
        href,
      };
    });

  const paginationLink = $(".pagination .link").last().attr("href") || "";
  const totalPage = new URL(paginationLink).searchParams.get("page") || "";

  return {
    title,
    anime,
    totalPage,
  };
}
