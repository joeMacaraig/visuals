import VideoGallery from "@/app/components/Videos/VideoGallery";

type Props = {
  params: {
    myParams: string;
  };
};

export function generateMetadeta({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "popular";
  const page = myParams?.[1] ?? "1";
  return {
    title: `Visuals | searching for ${topic} videos - pg.${page}`,
  };
}

export default function SearchRes({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "popular";
  const page = myParams?.[1] ?? "1";
  return <VideoGallery topic={topic} page={page} />;
}
