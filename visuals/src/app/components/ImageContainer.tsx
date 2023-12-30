import type { Photo } from "@/models/image";
import Image from "next/image";
import Link from "next/link";
type Props = {
  photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
  const widthHeight = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeight);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <>
      <div
        className="w-[250px] justify-self-center hover:-translate-y-1 hover:-translate-x-1 ease-in-out duration-500"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <Link
          href={photo.url}
          target="_blank"
          className="grid place-content-center"
        >
          <div className="rounded-xl overflow-hidden group shadow-md">
            <Image
              src={photo.src.large}
              alt={photo.alt}
              width={250}
              height={galleryHeight}
              sizes="250px"
              placeholder="blur"
              blurDataURL={photo.blurredDataUrl}
              className="group-hover:opacity-75"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
