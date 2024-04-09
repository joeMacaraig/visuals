"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import fetchPhotos from "@/lib/fetchPhotos";
import type { ImagesRes } from "@/models/image";
import blurredImageURL from "@/lib/getBase";

interface PhotoProp {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    large: string;
  };
  alt: string;
  blurredDataUrl?: string | undefined;
}

interface Prop {
  photos: PhotoProp;
  index: number;
}
// { photos } : Photos
let count = 2;

const Loading = async () => {
  const images: ImagesRes | undefined = await fetchPhotos(count);
  const { ref, inView } = useInView();
  const [data, setData] = useState<PhotoProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchPhotos(count).then((res) => {
        setData([...data, ...res]);
        count++;
      });
    }
  }, [inView, data]);
  return (
    <div>
      <h2 className="h-screen bg-red-500 text-white">Photo Gallery</h2>
      <div ref={ref}></div>
    </div>
  );
};

export default Loading;
