import getAnimeByQuery from "@/libs/get-anime-by-query";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const limit = searchParams.get("limit") || "50";
  const page = searchParams.get("page") || "1";

  const anime = await getAnimeByQuery(query, limit, page);

  return Response.json(anime);
}
