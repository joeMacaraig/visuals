import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Landing() {
  const timer = setInterval(() => {
    <span></span>;
  });
  return (
    <section className="h-full flex items-center justify-center flex-col">
      <div className="h-[95vh] p-8 grid grid-cols-2 bg-sky-200 w-full gap-10">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl">Welcome to Visuals. 📷</h1>
            <p className="text-3xl">
              Explore a collection of stunning images and dynamic videos.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="absolute h-80 w-full border-4 border-blue-400 bg-white translate-x-6 translate-y-6"></div>
          <div className="absolute h-80 w-full border-4 border-blue-400 bg-white"></div>
          <div className="absolute h-80 w-full border-4 border-blue-400 bg-white -translate-x-6 -translate-y-6"></div>
        </div>
        {/* <div className="text-center">
          <h1 className="text-6xl">Welcome to Visuals. 📷</h1>
          <p></p>
          <p className="text-4xl">
          explore a collection of stunning images and dynamic videos.
          </p>
        </div>
        <button className="animate-bounce bg-red-500 absolute bottom-0 p-2 rounded-full">
          Down
        </button> */}
      </div>
      <div className="h-[95vh] grid p-8 grid-cols-2">
        <div className="flex items-center justify-center relative">
          <div className="h-80 w-80 absolute z-10 hover:scale-110 hover:-translate-y-1 transition duration-500 ease-in-out">
            <Image
              src="https://images.pexels.com/photos/19789102/pexels-photo-19789102/free-photo-of-riga-latvia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="photo"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-xl shadow"
            />
          </div>
          <div className="h-80 w-80 absolute aspect-w-1 aspect-h-1 left-24 top-36 hover:z-10 hover:scale-110 hover:-translate-y-1 transition duration-500 ease-in-out">
            <Image
              src="https://images.pexels.com/photos/19792047/pexels-photo-19792047/free-photo-of-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="photo"
              width={80}
              height={80}
              layout="responsive"
              className="object-cover rounded-xl shadow"
            />
          </div>
          <div className="h-80 w-80 absolute right-20 top-40 hover:z-10 hover:scale-110 hover:-translate-y-1 transition duration-500 ease-in-out">
            <Image
              src="https://images.pexels.com/photos/19696590/pexels-photo-19696590/free-photo-of-skiers-on-the-mountain-slope-at-the-alpine-hut.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="photo"
              width={80}
              height={80}
              layout="responsive"
              className="object-cover rounded-xl shadow"
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

      <div className="h-[95vh] w-full flex items-center justify-center bg-sky-200 relative overflow-hidden">
        <video
          src="/aerial.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="flex flex-col justify-center items-center text-center p-4 gap-2 absolute z-10 bg-opacity-40 bg-white h-full w-full text-black">
          <h2 className="text-4xl font-medium">Immerse in Dynamic Videos</h2>
          <p className="text-xl w-1/2">
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
      </div>

      <div>
        <div>something small</div>
      </div>
    </section>
  );
}
