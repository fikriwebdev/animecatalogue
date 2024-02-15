import generateOgImage from "@/libs/generate-og-image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Anime Catalogue";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return await generateOgImage("Top Airing Anime", size);
}
