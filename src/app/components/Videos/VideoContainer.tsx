import type { Video } from "@/models/video";

type Props = {
  video: Video;
};

export default function VideoContainer({ video }: Props) {
  const firstVideo = video.video_files[0];
  return (
    <div className="w-[250px] relative overflow-hidden ">
      <h3>First Video File:</h3>
      <video
        className="w-full h-full object-contain"
        width={firstVideo.width}
        height={firstVideo.height}
        src={firstVideo.link}
        autoPlay
        loop
        muted
      />
    </div>
  );
}
