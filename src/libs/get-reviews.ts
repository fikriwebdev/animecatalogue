import getHref from "@/utils/get-href";
import * as cheerio from "cheerio";

export type Review = {
  anime: {
    title: string;
    href: string;
    image: string;
  };
  user: {
    username: string;
    image: string;
  };
  sentimen: string;
  review: string;
  date: string;
};

export type ReviewsResult = {
  reviews: Review[];
};

export default async function getReviews(page = 1): Promise<ReviewsResult> {
  const response = await fetch(
    `https://myanimelist.net/reviews.php?t=anime&p=${page}`
  );
  const reviewsText = await response.text();

  const $ = cheerio.load(reviewsText);

  const reviews: Review[] = $(".review-element")
    .toArray()
    .map((el) => {
      const $div = cheerio.load(el);

      const anime = {
        title: $div(".titleblock>.title").text(),
        href: getHref($div(".titleblock>.title").attr()?.["href"] || ""),
        image:
          $div(
            "div.thumbbody.mt8 > div.body > div.text > div > a >img"
          ).attr()?.["data-src"] || "",
      };

      const user = {
        username: $div(".thumbbody>.body>.username>a").text(),
        image: $div(".thumbbody>.thumb>a>img").attr()?.["data-src"] || "",
      };

      const sentimen = $div("div.body > div.tags > .tag").eq(0).text().trim();
      const review = $div("div.text").text().trim();
      const date = $div(".thumbbody > div.body > div.update_at").text();

      return {
        anime,
        date,
        sentimen,
        review,
        user,
      };
    });

  return {
    reviews,
  };
}
