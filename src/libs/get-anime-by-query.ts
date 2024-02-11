import getHDImage from "@/utils/get-hd-image";
import getHref from "@/utils/get-href";
import * as cheerio from "cheerio";

export type AnimeQueryResult = {
  img: string;
  title: string;
  href: string;
  eps: string;
  rating: string;
  type: string;
};

export type AnimeByQueryResult = AnimeQueryResult[];

export default async function getAnimeByQuery(
  query: string,
  limit: string,
  page: string
): Promise<AnimeByQueryResult> {
  const show = (Math.min(1, +page) - 1) * 50;

  const response = await fetch(
    `https://myanimelist.net/anime.php?q=${query}&cat=anime&show=${show}`
  );
  const resultText = await response.text();

  const $ = cheerio.load(resultText);

  const anime: AnimeByQueryResult = $("table:nth-child(1) tr")
    .toArray()
    .slice(1)
    .map((tr) => {
      const $el = cheerio.load(tr);

      const imgAttr = $el(".picSurround>a>img").attr();
      const img = getHDImage(imgAttr ? imgAttr["data-src"] : "");
      const title = $el(".title a").eq(0).text();
      const aAttr = $el(".title>a").attr();
      const href = getHref(aAttr ? aAttr["href"] : "");

      const type = $el("td").eq(2).text().trim();
      const eps = $el("td").eq(3).text().trim();
      const rating = $el("td").eq(4).text().trim();

      return { title, img, eps, rating, href, type };
    });

  return anime.slice(0, +limit);
}
