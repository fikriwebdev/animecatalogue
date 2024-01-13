import getHDImage from "@/utils/get-hd-image";
import * as cheerio from "cheerio";

export type Result = {
  animes: {
    rank?: string;
    title: string;
    info?: {
      eps: string;
      releaseDate: string;
    };
    image: string;
    rating?: string;
    href: string;
  }[];
  hasNextPage?: boolean;
};

type ListType = "bypopularity" | "airing" | "favorite";

export async function getTopAnime(type?: ListType, page = 1): Promise<Result> {
  const listType = type ? `?type=${type}` : "";

  const limit = page > 1 ? `&limit=${page * 50}` : "";

  const topAnimeResponse = await fetch(
    `https://myanimelist.net/topanime.php${listType}${limit}`
  );
  const topAnimeDataText = await topAnimeResponse.text();

  const $ = cheerio.load(topAnimeDataText);

  //   const titles = $(".anime_ranking_h3>a")
  //     .toArray()
  //     .map((el) => $(el).text());

  //   const scores = $(".score .score-label")
  //     .toArray()
  //     .map((el) => $(el).text());

  //   const info = $(".title .information")
  //     .toArray()
  //     .map((el) => $(el).text());

  const hasNextPage = $(".link-blue-box.next").length;

  const animes = $(".ranking-list")
    .toArray()
    .map((el) => {
      const $td = cheerio.load(el);
      const rank = $td(".top-anime-rank-text").text();
      const title = $td(".anime_ranking_h3>a").text();
      const info = $td(".title .information").text().split("\n");
      const image = $td(".title>a>img").attr();
      const rating = $td(".score .score-label").text();
      const href = $td(".anime_ranking_h3>a").attr();

      const imageSrc = image ? image["data-src"] : "";

      const hdImage = getHDImage(imageSrc);

      return {
        rank,
        title,
        info: { eps: info[1].trim(), releaseDate: info[2].trim() },
        image: hdImage,
        rating,
        href: href ? href["href"].replace("https://myanimelist.net", "") : "",
      };
    });

  return {
    animes,
    hasNextPage: Boolean(hasNextPage),
  };
}
