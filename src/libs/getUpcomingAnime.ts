import * as cheerio from "cheerio";

type Anime = {
  title: string;
  image: string;
  href: string;
};

export type SlideAnimeResult = {
  title: string;
  anime: Anime[];
};

export async function getUpcomingAnime(): Promise<SlideAnimeResult> {
  const slideAnimeResponse = await fetch("https://myanimelist.net/");
  const slideAnimeDataText = await slideAnimeResponse.text();

  const $ = cheerio.load(slideAnimeDataText);

  const title = $(".index_h2_seo>a").text();

  const slideAnime = $(".seasonal .widget-slide .btn-anime")
    .toArray()
    .map((el) => {
      const $li = cheerio.load(el);

      const title = $li(".title").text();
      const image = $li(".link>img").attr();

      const imageSrc = image ? image["data-src"] : "";

      const splittedSrc = imageSrc.split("/");

      const hdImage = `https://cdn.myanimelist.net/images/anime/${splittedSrc[7]}/${splittedSrc[8]}`;

      const a = $li("a").attr();

      const href = a ? a["href"].replace("https://myanimelist.net", "") : "";

      return {
        title,
        image: hdImage,
        href,
      };
    });

  return { title, anime: slideAnime };
}
