import type { Video } from "@/models/video";
import Link from "next/link";

type Props = {
  video: Video;
};

export default function VideoContainer({ video }: Props) {
  const firstVideo = video.video_files[0];
  return (
    <div className="w-[250px] flex-grow">
      <h3>First Video File:</h3>
      <video width={firstVideo.width} height={firstVideo.height} autoPlay>
        <source src={firstVideo.link} />
      </video>
    </div>
  );
}
