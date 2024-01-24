import getHDImage from "@/utils/get-hd-image";
import getHref from "@/utils/get-href";
import * as cheerio from "cheerio";

type Property = {
  caption: string;
  item: string;
};

export type AnimeSeason = {
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

export type AnimeBySeasonResult = AnimeSeason[];

export default async function getAnimeBySeason(
  href: string
): Promise<AnimeBySeasonResult> {
  const response = await fetch(`https://myanimelist.net/anime${href}`);
  const seasonAnimeText = await response.text();

  const $ = cheerio.load(seasonAnimeText);

  const anime: AnimeSeason[] = $(
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

  return anime;
}
