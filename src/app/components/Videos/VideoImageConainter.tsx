import type { Video } from "@/models/video";
import Image from "next/image";
import Link from "next/link";
type Props = {
  video: Video;
};

export default function VideoImageContainer({ video }: Props) {
  const widthHeight = video.height / video.width;
  const galleryHeight = Math.ceil(250 * widthHeight);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  return (
    <>
      <div
        className="w-[250px] justify-self-center hover:-translate-y-1 ease-in-out duration-500"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <Link
          href={video.url}
          target="_blank"
          className="grid place-content-center"
        >
          <div className="rounded overflow-hidden group shadow-xl border">
            <Image
              src={video.image}
              alt="video image"
              width={250}
              height={galleryHeight}
              sizes="250px"
              placeholder="blur"
              blurDataURL={video.blurredDataUrl}
              className="group-hover:opacity-75"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
