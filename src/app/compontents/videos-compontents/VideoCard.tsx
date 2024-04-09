"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { MdClose } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

export interface VideoProp {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: string;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
  }[];
  video_pictures: {
    id: number;
    picture: string;
    nr: number;
  }[];
}

interface Prop {
  video: VideoProp;
}

export const VideoCard = ({ video }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const widthHeight = video.height / video.width;
  const videoHeight = Math.ceil(250 * widthHeight);
  const videoSpan = Math.ceil(videoHeight / 10) + 1;
  const link = video.video_files[0].link;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="w-[250px] justify-self-center m-2"
      style={{ gridRow: `span ${videoSpan}` }}
    >
      <div
        className="rounded-xl group overflow-hidden shadow"
        onClick={openModal}
      >
        <Image
          src={video.image}
          alt="video image"
          width={250}
          height={videoHeight}
          sizes="250px"
          className="group-hover:opacity-75"
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-md bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-red-100 px-2 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 absolute right-2 top-4"
                    onClick={closeModal}
                  >
                    <MdClose />
                  </button>

                  <div className="mt-2">
                    <video
                      src={link}
                      autoPlay
                      muted
                      loop
                      className="w-[500px] h-full"
                    />
                  </div>

                  <div className="mt-4 flex flex-row justify-between  items-center">
                    <div className="flex flex-row gap-2 items-center ">
                      <IoPersonCircleSharp size={50} />
                      <h1 className="font-medium">{video.user.name}</h1>
                    </div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
