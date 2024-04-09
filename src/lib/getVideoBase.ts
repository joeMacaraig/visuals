import { getPlaiceholder } from "plaiceholder";
import type { Video, FilmRes } from "@/models/video";

async function getBase64Video(imageUrl: string) {
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

export default async function blurredVideoURL(film: FilmRes): Promise<Video[]> {
  //makes request in one go so it doesnt wait for each one
  const getBase64Promises = film.videos.map((video) =>
    getBase64Video(video.image)
  );

  //resolve all requests
  const base64Res = await Promise.all(getBase64Promises);

  //maps through videos and assigns the blurredDataURL which was optional to a base64Res
  const videoBlur: Video[] = film.videos.map((video, index) => {
    video.blurredDataUrl = base64Res[index];
    return video;
  });

  return videoBlur;
}