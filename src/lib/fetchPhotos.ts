import { env } from "./env";
import { ImagesRes } from "@/models/image";
import { ImageWithPhotosSchema } from "@/models/image";

export default async function fetchPhotos(
  page: number
): Promise<ImagesRes | undefined> {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=40`,
      {
        headers: { Authorization: env.PEXELS_API_KEY },
      }
    );

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
