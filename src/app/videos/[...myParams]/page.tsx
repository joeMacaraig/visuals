import Image from "next/image";
import {
  VideoCard,
  VideoProp,
} from "@/app/compontents/videos-compontents/VideoCard";
import { fetchVideos } from "@/lib/videos/fetchVideos";
import { LoadVideos } from "@/app/compontents/videos-compontents/LoadVideos";

export default async function Videos() {
  const data = await fetchVideos(1);
  return (
    <main className="flex h-full flex-col justify-center items-center w-full">
      <div className="h-[25vh] w-full flex items-end relative">
        <div className="relative -z-10 w-screen">
          <video
            src="/videos_landing.mp4"
            autoPlay
            muted
            loop
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="rounded-t-full bg-white h-[30%] w-full flex justify-center absolute">
          <div className="text-6xl font-medium -translate-y-10 tracking-tighter">
            VIDEOS.
          </div>
        </div>
      </div>
      <div className="h-[10vh] w-full items-center justify-center flex mb-10">
        <input className="border px-4 py-2 w-1/2" />
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative mb-10">
          {data.videos.map((item: VideoProp) => (
            <VideoCard video={item} />
          ))}
          <LoadVideos />
        </div>
      </div>
    </main>
  );
}
