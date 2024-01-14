import fetchImages from "@/lib/fetchImages";
import type { ImagesRes } from "@/models/image";
import ImageContainer from "./ImageContainer";
import getPrev from "@/lib/getPrev";
import PaginationImage from "./Pagination";
import blurredImageURL from "@/lib/getBase";
import SearchBar from "./SearchBar";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

export default async function ImageGallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page) {
    //browsing another page (not home)
    url = `https://api.pexels.com/v1/curated?page=${page}&per_page=40`;
  } else if (topic === "curated") {
    url = "https://api.pexels.com/v1/curated?page=1&per_page=40";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=40`;
  }
  const images: ImagesRes | undefined = await fetchImages(url);
  if (!images || images.per_page === 0) {
    return (
      <h2 className="m-4 text-2xl font-bold flex justify-center items-center">
        No Images Found
      </h2>
    );
  }

  const photosWithBlur = await blurredImageURL(images);

  const { prevPage, nextPage } = getPrev(images);
  const footerProps = { topic, page, nextPage, prevPage };
  return (
    <section className="max-w-6xl mx-auto">
      <div className="h-[25vh] flex items-center flex-col justify-center ">
        <div className="text-4xl font-medium tracking-wide text-center">
          <span>IMAGES.</span>
          <span className="p-2 text-gray-300 font-light tracking-tighter">
            ({images.total_results})
          </span>
        </div>
        <div className="flex items-center justify-center mx-auto my-4 w-full">
          <SearchBar />
        </div>
      </div>
      <div className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px] max-w-6xl mx-auto">
        <div></div>
        {photosWithBlur?.map((photo) => (
          <ImageContainer key={photo.id} photo={photo} />
        ))}
      </div>
      <PaginationImage {...footerProps} />
    </section>
  );
}
