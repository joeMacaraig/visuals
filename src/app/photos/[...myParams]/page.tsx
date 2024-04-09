import ImageGallery from "@/app/components/Images/ImageGallery";

type Props = {
  params: {
    myParams: string;
  };
};

export function generateMetadeta({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return {
    title: `Visuals | searching for ${topic} - Page ${page}`,
  };
}

export default function SearchRes({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";
  return <ImageGallery topic={topic} page={page} />;
}
