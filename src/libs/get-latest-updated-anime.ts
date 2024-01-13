import * as cheerio from "cheerio";

type LatestUpdateAnimeResult = {
  title: string;
  image: string;
  href: string;
  episode: {
    number: string;
    isPremium: boolean;
  };
}[];

export default async function getLatestUpdatedAnime(): Promise<LatestUpdateAnimeResult> {
  const latestUpdateAnimeResponse = await fetch("https://myanimelist.net/");
  const latestUpdateAnimeData = await latestUpdateAnimeResponse.text();

  const $ = cheerio.load(latestUpdateAnimeData);

  const anime = $(".latest_episode_video .btn-anime")
    .toArray()
    .map((el) => {
      const $li = cheerio.load(el);

      const title = $li(".latest_updated_h3").text();
      const image = $li(".link>img").attr();
      const episode = {
        number: $li(".title .di-b").first().text(),
        isPremium: !!$li(".title .di-b>.icon-pay").length,
      };

      const imageSrc = image ? image["data-src"] : "";

      const splittedSrc = imageSrc.split("/");

      const hdImage = `https://cdn.myanimelist.net/images/anime/${splittedSrc[7]}/${splittedSrc[8]}`;

      const a = $li("a").attr();

      const href = a ? a["href"].replace("https://myanimelist.net", "") : "";

      return {
        title,
        image: hdImage,
        href,
        episode,
      };
    });

  return anime;
}
