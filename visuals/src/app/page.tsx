import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-[80vh] text-5xl">
        <div>Look for your next</div>
        <div>photographer, photos, videos</div>
      </div>
      <div className="flex flex-col items-center justify-center h-[80vh] bg-violet-300 w-full">
        <div>Search for photos to use.</div>
      </div>
      <div className="flex flex-col items-center justify-center h-[80vh] bg-orange-300 w-full">
        <div>Search for videos to use.</div>
      </div>
    </div>
  );
}
