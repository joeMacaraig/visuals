"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { fetchVideos } from "@/lib/videos/fetchVideos";
import { VideoCard, VideoProp } from "./VideoCard";
import { RotatingLines } from "react-loader-spinner";

let page = 2;

export const LoadVideos = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<VideoProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchVideos(page).then((res) => {
        setData([...data, ...res.videos]);
      });
      page++;
    }
  }, [inView, data]);

  return (
    <>
      {data.map((item: VideoProp) => (
        <VideoCard video={item} />
      ))}
      <section className="">
      <div ref={ref} className="text-3xl">
          Loading...
        </div>
      </section>
    </>
  );
};
