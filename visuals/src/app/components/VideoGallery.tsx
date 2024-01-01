import fetchVideos from "@/lib/fetchVideos";
import { FilmRes } from "@/models/video";
import VideoContainer from "./VideoContainer";
import React from "react";
type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
export default async function VideoGallery({ topic = "popular", page }: Props) {
  let url = "https://api.pexels.com/videos/popular?per_page=10";
  //   "https://api.pexels.com/videos/popular?per_page=1"
  //   if (topic === "popular" && page) {
  //     //browsing another page (not home)
  //     url = `https://api.pexels.com/videos/popular?page=${page}`;
  //   } else if (topic === "popular") {
  //     url = "https://api.pexels.com/videos/popular";
  //   } else if (!page) {
  //     url = `https://api.pexels.com/videos/search?query=${topic}`;
  //   } else {
  //     url = `https://api.pexels.com/videos/search?query=${topic}&page=${page}`;
  //   }
  const film: FilmRes | undefined = await fetchVideos(url);
  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery mx-auto">
        {film?.videos?.map((video) => (
          <div className="h-64 bg-gray-200 rounded-lg">
            <VideoContainer key={video.id} video={video} />
          </div>
        ))}
      </section>
    </>
  );
}
