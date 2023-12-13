import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const sleep = (timeout: number) => new Promise((r) => setTimeout(r, timeout));

export async function getProducts() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://alfagift.id/find/indomie");

  await sleep(3000);

  const content = await page.content();

  const $ = cheerio.load(content);

  const productName = $(".product_name").text();

  return { productName };
}
