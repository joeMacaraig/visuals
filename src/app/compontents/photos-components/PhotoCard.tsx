"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

export interface PhotoProp {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

interface Prop {
  photo: PhotoProp;
}

export const PhotoCard = ({ photo }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const widthHeight = photo.height / photo.width;
  const photoHeight = Math.ceil(250 * widthHeight);
  const photoSpan = Math.ceil(photoHeight / 10) + 1;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className="w-[250px] justify-self-center m-2 relative"
        style={{ gridRow: `span ${photoSpan}` }}
      >
        <div
          className="relative w-full shadow-lg rounded-lg overflow-hidden duration-300 hover:-translate-y-1 hover:opacity-75 hover:cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={photo.src.original}
            alt={photo.alt}
            width={250}
            height={photoHeight}
            objectFit="contain"
            loading="lazy"
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
                      <Image
                        src={photo.src.original}
                        alt={photo.alt}
                        width={1000}
                        height={100}
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 flex flex-row justify-between  items-center">
                      <div className="flex flex-row gap-2 items-center ">
                        <IoPersonCircleSharp
                          size={50}
                          color={photo.avg_color}
                        />
                        <h1 className="font-medium">{photo.photographer}</h1>
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
    </>
  );
};
