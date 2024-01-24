import * as cheerio from "cheerio";

type AvailableSeason = {
  title: string;
  href: string;
  isDefault: boolean;
};

export type AvailableSeasonsResults = AvailableSeason[];

export default async function getAvailableSeasons(): Promise<AvailableSeasonsResults> {
  const response = await fetch(`https://myanimelist.net/anime/season`);
  const seasonsText = await response.text();

  const $ = cheerio.load(seasonsText);

  const navs = $("div.horiznav_nav>ul li")
    .toArray()
    .filter((_, i) => i > 0 && i < 6)
    .map((el) => {
      const $li = cheerio.load(el);

      return {
        title: $li("a").text().trim(),
        href: ($li("a").attr()?.["href"] || "").replace(
          "https://myanimelist.net/anime",
          ""
        ),
        isDefault: !!$li("h1.season_nav").length,
      };
    });

  return navs;
}
