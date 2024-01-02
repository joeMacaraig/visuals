import fetchVideos from "@/lib/fetchVideos";
import { FilmRes } from "@/models/video";
import VideoImageContainer from "./VideoImageConainter";
import blurredVideoURL from "@/lib/getVideoBase";
import SearchBar from "./SearchBar";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
export default async function VideoGallery({ topic = "popular", page }: Props) {
  let url = "https://api.pexels.com/videos/popular?per_page=10";
  if (topic === "popular" && page) {
    //browsing another page (not home)
    url = `https://api.pexels.com/videos/popular?page=${page}`;
  } else if (topic === "popular") {
    url = "https://api.pexels.com/videos/popular";
  } else if (!page) {
    url = `https://api.pexels.com/videos/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/videos/search?query=${topic}&page=${page}`;
  }
  const film: FilmRes | undefined = await fetchVideos(url);
  if (!film || film.per_page === 0) {
    return (
      <h2 className="m-4 text-2xl font-bold flex justify-center items-center">
        No Images Found
      </h2>
    );
  }
  const photosWithBlur = await blurredVideoURL(film);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-[25vh] flex items-center flex-col justify-center ">
        <div className="text-4xl font-medium tracking-wide text-center">
          <span>VIDEOS.</span>
          <span className="p-2 text-gray-300 font-light tracking-tighter">
            ({film.total_results})
          </span>
        </div>
        <div className="flex items-center justify-center mx-auto my-4 w-full">
          <SearchBar />
        </div>
      </div>
      <section className="px-1 my-3 grid grid-cols-gallery sm:auto-rows-[10.60px] max-w-6xl mx-auto">
        {photosWithBlur?.map((video) => (
          <VideoImageContainer key={video.id} video={video} />
        ))}
      </section>
    </div>
  );
}
