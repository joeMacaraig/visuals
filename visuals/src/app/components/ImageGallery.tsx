import fetchImages from "@/lib/fetchImages";
import type { ImagesRes } from "@/models/image";
import React from "react";
import ImageContainer from "./ImageContainer";
import addBlurredDateUrls from "@/lib/getBase";
import getPrev from "@/lib/getPrev";
import Pagination from "./Pagination";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

export default async function ImageGallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page) {
    //browsing another page (not home)
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }
  const images: ImagesRes | undefined = await fetchImages(url);

  if (!images || images.per_page === 0) {
    return (
      <h2 className="m-4 text-2xl font-bold flex justify-center items-center">
        No Images Found
      </h2>
    );
  }

  const photosWithBlur = await addBlurredDateUrls(images);

  const { prevPage, nextPage } = getPrev(images);
  const footerProps = { topic, page, nextPage, prevPage };
  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur?.map((photo) => (
          <ImageContainer key={photo.id} photo={photo} />
        ))}
      </section>
      <Pagination {...footerProps} />
    </>
  );
}
