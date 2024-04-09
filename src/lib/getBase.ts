import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesRes } from "@/models/image";

async function getBase64Photos(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `FAILED TO FETCH IMAGE: ${response.status} ${response.statusText}`
      );
    }
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}

export default async function blurredImageURL(
  images: ImagesRes
): Promise<Photo[]> {
  //makes request in one go so it doesnt wait for each one
  const getBase64Promises = images.photos.map((photo) =>
    getBase64Photos(photo.src.large)
  );

  //resolve all requests
  const base64Res = await Promise.all(getBase64Promises);

  //maps through photos and assigns the blurredDataURL which was optional to a base64Res
  const photoBlur: Photo[] = images.photos.map((photo, index) => {
    photo.blurredDataUrl = base64Res[index];
    return photo;
  });

  return photoBlur;
}