export default function getHDImage(src: string) {
  const splittedSrc = src.split("/");

  return `https://cdn.myanimelist.net/images/${splittedSrc[6]}/${splittedSrc[7]}/${splittedSrc[8]}`;
}
