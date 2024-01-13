import getHDImage from "@/utils/get-hd-image";
import * as cheerio from "cheerio";

type Character = {
  char_img: string;
  char_name: string;
  role: string;
  voice_char_name: string;
  voice_char_country: string;
  voice_char_img: string;
};

type Staff = {
  char_img: string;
  char_name: string;
  role: string;
};

type Recommendation = {
  title: string;
  image: string;
  href: string;
};

export type AnimeDetailResult = {
  jp_title: string;
  en_title: string;
  score: string;
  ranked: string;
  popularity: string;
  season: string;
  synopsis: string;
  background: string;
  poster: string;
  information: {
    type: string;
    episodes: string;
    status: string;
    aired: string;
    premiered: string;
    broadcast: string;
    previewed: string;
    producers: string;
    licensors: string;
    studios: string;
    source: string;
    genres: string;
    duration: string;
    rating: string;
  };
  statistics: {
    score: string;
    ranked: string;
    popularity: string;
    favorites: string;
  };
  characters: Character[];
  staffs: Staff[];
  recommendations: Recommendation[];
};

export async function getAnimeDetail(path: string): Promise<AnimeDetailResult> {
  const animeDetailResponse = await fetch(
    `https://myanimelist.net/anime/${path}`
  );
  const animeDetailText = await animeDetailResponse.text();

  const $ = cheerio.load(animeDetailText);

  const jp_title = $(".title-name").text();
  const en_title = $(".title-english").text();
  const score = $("div.score-label").text();
  const ranked = $(".ranked").text();
  const popularity = $(".popularity").text();
  const season = $(".season").text();
  const synopsis = $('p[itemprop="description"]').text();
  const poster = $(".leftside img").eq(0).attr()?.["data-src"] || "";

  const background = `${jp_title} ${$('td[valign="top"]')
    .contents()
    .filter(function () {
      return this.nodeType === 3;
    })
    .text()
    .replaceAll("\n", "")
    .trim()}`;

  const information: AnimeDetailResult["information"] = {
    type: $(".leftside")
      .children(".spaceit_pad")
      .eq(2)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    episodes: $(".leftside")
      .children(".spaceit_pad")
      .eq(3)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    status: $(".leftside")
      .children(".spaceit_pad")
      .eq(4)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    aired: $(".leftside")
      .children(".spaceit_pad")
      .eq(5)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    premiered: $(".leftside")
      .children(".spaceit_pad")
      .eq(6)
      .children("a")
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    broadcast: $(".leftside")
      .children(".spaceit_pad")
      .eq(7)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    previewed: $(".leftside")
      .children(".spaceit_pad")
      .eq(8)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    producers: $(".leftside")
      .children(".spaceit_pad")
      .eq(9)
      .children("a")
      .toArray()
      .map((el) => {
        const a = $.load(el);
        return a.text();
      })
      .join(", ")
      .replaceAll("\n", "")
      .trim(),
    licensors: $(".leftside")
      .children(".spaceit_pad")
      .eq(10)
      .children()
      .toArray()
      .map((el) => {
        const a = $.load(el);
        return a.text();
      })
      .join(", ")
      .replaceAll("\n", "")
      .trim(),
    studios: $(".leftside")
      .children(".spaceit_pad")
      .eq(11)
      .children("a")
      .toArray()
      .map((el) => {
        const a = $.load(el);
        return a.text();
      })
      .join(", ")
      .replaceAll("\n", "")
      .trim(),
    source: $(".leftside")
      .children(".spaceit_pad")
      .eq(12)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    genres: $(".leftside")
      .children(".spaceit_pad")
      .eq(13)
      .children("a")
      .toArray()
      .map((el) => {
        const a = $.load(el);
        return a.text();
      })
      .join(", ")
      .replaceAll("\n", "")
      .trim(),
    duration: $(".leftside")
      .children(".spaceit_pad")
      .eq(14)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
    rating: $(".leftside")
      .children(".spaceit_pad")
      .eq(15)
      .contents()
      .last()
      .text()
      .replaceAll("\n", "")
      .trim(),
  };

  const statistics: AnimeDetailResult["statistics"] = {
    score: $(".leftside")
      .children("div[itemprop='aggregateRating']")
      .toArray()
      .map((el) => {
        const $item = $.load(el);

        return `${$item(".score-label").text()} (scored by ${$item(
          'span[itemprop="ratingCount"]'
        ).text()})`;
      })
      .join("")

      .replaceAll("\n", "")
      .trim(),
    ranked: $(".leftside")
      .children(".spaceit_pad")
      .eq(16)
      .contents()
      .eq(2)
      .text()
      .replaceAll("\n", "")
      .trim(),
    popularity: $(".leftside")
      .children(".spaceit_pad")
      .eq(17)
      .contents()
      .eq(2)
      .text()
      .replaceAll("\n", "")
      .trim(),
    favorites: $(".leftside")
      .children(".spaceit_pad")
      .eq(19)
      .contents()
      .eq(2)
      .text()
      .replaceAll("\n", "")
      .trim(),
  };

  const characters: AnimeDetailResult["characters"] = $(
    ".detail-characters-list:nth-of-type(3) table[width='100%']"
  )
    .toArray()
    .map((el) => {
      const $table = cheerio.load(el);

      const hdCharImage = getHDImage(
        $table(".picSurround>a>img").eq(0).attr()?.["data-src"] || ""
      );

      const hdVoiceCharImage = getHDImage(
        $table(".picSurround>a>img").eq(1).attr()?.["data-src"] || ""
      );

      const character: Character = {
        char_img: hdCharImage,
        char_name: $table("td").eq(1).children().eq(0).children().text(),
        role: $table("td").eq(1).children().eq(1).children().text(),
        voice_char_name: $table("td")
          .eq(2)
          .children()
          .children()
          .children()
          .children()
          .children()
          .eq(0)
          .text(),
        voice_char_country: $table("td")
          .eq(2)
          .children()
          .children()
          .children()
          .children()
          .children()
          .eq(2)
          .text(),
        voice_char_img: hdVoiceCharImage,
      };

      return character;
    });

  const staffs: AnimeDetailResult["staffs"] = $(
    ".detail-characters-list:nth-of-type(5) table[width='100%']"
  )
    .toArray()
    .map((el) => {
      const $table = cheerio.load(el);

      const hdCharImage = getHDImage(
        $table(".picSurround>a>img").eq(0).attr()?.["data-src"] || ""
      );

      const staffs: Staff = {
        char_img: hdCharImage,
        char_name: $table("td").eq(1).children().eq(0).text(),
        role: $table("td").eq(1).children().eq(1).children().text(),
      };

      return staffs;
    });

  const recommendations: AnimeDetailResult["recommendations"] = $(
    ".anime-slide-block .anime-slide .btn-anime"
  )
    .toArray()
    .map((el) => {
      const $anime = cheerio.load(el);

      const title = $anime(".title").text();
      const image = $anime("img").attr();
      const imageSrc = image ? image["data-src"] : "";

      const hdImage = getHDImage(imageSrc);

      const a = $anime(".link").attr();
      const src = a ? a["href"] : "";
      const href = src.replace("https://myanimelist.net", "");

      return {
        title,
        image: hdImage,
        href,
      };
    });

  return {
    jp_title,
    en_title,
    score,
    ranked,
    poster,
    popularity,
    season,
    synopsis,
    background,
    information,
    statistics,
    characters,
    staffs,
    recommendations,
  };
}
