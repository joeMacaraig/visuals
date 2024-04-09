"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect, PropsWithoutRef } from "react";
import { fetchPhotos } from "@/lib/photos/fetchPhotos";
import { PhotoCard, PhotoProp } from "./PhotoCard";

let page = 2;

export const LoadPhotos = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<PhotoProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchPhotos(page).then((res) => {
        setData([...data, ...res.photos]);
        console.log(res);
      });
      page++;
    }
  }, [inView, data]);

  return (
    <>
      {data.map((item: PhotoProp) => (
        <PhotoCard photo={item} />
      ))}
      <section className="">
        <div ref={ref} className="text-3xl">
          Loading...
        </div>
      </section>
    </>
  );
};
