import type { FilmRes } from "@/models/video";
import { FilmWithVideosSchema } from "@/models/video";
import { env } from "./env";

export default async function fetchVideos(
  url: string
): Promise<FilmRes | undefined> {
  try {
    const response = await fetch(url, {
      headers: { Authorization: env.PEXELS_API_KEY },
    });

    if (!response.ok) throw new Error("FETCH VIDEOS ERROR!\n");

    const filmRes: FilmRes = await response.json();

    //parsing data with zod schema
    const parsedData = FilmWithVideosSchema.parse(filmRes);
    if (parsedData.total_results === 0) return undefined;
    console.log(parsedData);
    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
