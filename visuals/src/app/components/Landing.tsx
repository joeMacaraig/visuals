import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <section className="h-full flex items-center justify-center flex-col w-full">
      <div className="h-[100vh]">
        <div className="flex flex-col items-center justify-center relative w-full h-full">
          <div className="absolute -z-10 w-screen h-full bg-white">
            <img
              src="https://images.pexels.com/photos/2463851/pexels-photo-2463851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="mountains"
              className="w-full h-full opacity-75 object-cover inset-0 "
            />
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="w-full md:w-3/4 p-8 ">
              <h1 className="text-4xl md:text-5xl font-bold text-pretty">
                Welcome to Visuals. 📷
              </h1>
              <p className="text-2xl md:text-3xl">
                Explore a collection of stunning images and dynamic videos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full grid p-8 grid-cols-2">
        <div className="flex flex-col items-center justify-center p-4 gap-2">
          <div className="grid grid-cols-2 gap-2 w-full place-items-center">
            <img
              src="https://images.pexels.com/photos/19596003/pexels-photo-19596003/free-photo-of-compyter-monitor-mouse-and-minimalistic-decoration.jpeg"
              className="w-[400px] object-cover h-[400px] rounded-xl shadow-lg"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/19595917/pexels-photo-19595917/free-photo-of-hot-chocolate-in-a-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-[400px] object-cover h-[400px] rounded-xl shadow-lg"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/19615023/pexels-photo-19615023/free-photo-of-tree-and-house-in-snow-in-village-in-turkey-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-[400px] object-cover h-[400px] rounded-xl shadow-lg"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/19648029/pexels-photo-19648029/free-photo-of-clouds-over-rocks-on-peak-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-[400px] object-cover h-[400px] rounded-xl shadow-lg"
              alt=""
            />
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center p-4 gap-2">
          <h2 className="text-4xl">Discover Captivating Images.</h2>
          <p className="text-lg">
            Explore a curated collection of breathtaking visuals that transcend
            words. From serene landscapes to vibrant cityscapes, our gallery
            sourced from Pexels invites you to find the perfect image for your
            next project.
          </p>
          <Link
            href="/photos/curated"
            className="px-4 py-2 bg-black text-white rounded-full font-bold"
          >
            Explore
          </Link>
        </div>
      </div>

      <div className="h-[95vh] grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center text-center p-4 gap-2 bg-opacity-40 bg-white h-full w-full text-black">
          <h2 className="text-4xl font-semibold">Immerse in Dynamic Videos</h2>
          <p className="text-xl w-full font-medium">
            Dive into a world of storytelling through our diverse video
            collection. From inspiring documentaries to engaging short films,
            let motion be the catalyst that breathes life into your creative
            endeavors.
          </p>
          <Link
            href="/videos/popular"
            className="px-4 py-2 bg-black text-white rounded-full font-bold"
          >
            Explore
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden w-[90%]">
          <video
            src="/aerial.mp4"
            // className="absolute inset-0 w-full h-full object-cover"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
}
