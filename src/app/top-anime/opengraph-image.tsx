import generateOgImage from "@/libs/generate-og-image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Anime Catalogue";
export const size = {
  width: 350,
  height: 350,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image() {
  return await generateOgImage("Top Anime", size);
}
