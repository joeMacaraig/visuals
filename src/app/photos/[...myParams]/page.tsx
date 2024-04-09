import { fetchPhotos } from "@/lib/photos/fetchPhotos";
import {
  PhotoCard,
  PhotoProp,
} from "@/app/compontents/photos-components/PhotoCard";
import { LoadPhotos } from "@/app/compontents/photos-components/LoadPhotos";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

export default async function Photos() {
  const data = await fetchPhotos(1);
  
  return (
    <section className="flex h-full flex-col justify-center items-center w-full">
      <div className="h-[25vh] w-full flex items-end relative">
        <div className="relative -z-10 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={250}
            height={250}
            layout="responsive"
            alt="photo"
          />
        </div>
        <div className="rounded-t-full bg-white h-[30%] w-full flex justify-center absolute z-10">
          <div className="text-6xl font-medium -translate-y-10 tracking-tighter">
            PHOTOS.
          </div>
        </div>
      </div>
      <div className="h-[10vh] w-full items-center justify-center flex mb-10">
        <input className="border px-4 py-2 w-1/2" />
      </div>
      <div className="">
        <div className="w-full md:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
          {data.photos.map((item: PhotoProp) => (
            <div>
              <PhotoCard photo={item}/>
            </div>
          ))}
          <LoadPhotos />
        </div>
      </div>
    </section>
  );
}
