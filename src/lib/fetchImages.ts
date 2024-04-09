import type { ImagesRes } from "@/models/image";
import { ImageWithPhotosSchema } from "@/models/image";
import { env } from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesRes | undefined> {
  try {
    const response = await fetch(url, {
      headers: { Authorization: env.PEXELS_API_KEY },
    });

    if (!response.ok) throw new Error("FETCH IMAGES ERROR!\n");

    const imagesRes: ImagesRes = await response.json();

    //parsing data with zod schema
    const parsedData = ImageWithPhotosSchema.parse(imagesRes);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}