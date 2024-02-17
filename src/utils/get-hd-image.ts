export default function getHDImage(src: string) {
  const splittedSrc = src.split("/");

  const url = new URL(
    `https://cdn.myanimelist.net/images/${splittedSrc[6]}/${splittedSrc[7]}/${splittedSrc[8]}`
  );

  url.hash = "";
  url.search = "";

  return url.toString();
}
