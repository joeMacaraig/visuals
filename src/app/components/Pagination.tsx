"use client"

import Link from "next/link";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};
export default function PaginationImage({
  topic,
  page,
  prevPage,
  nextPage,
}: Props) {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const {ref, inView} = useInView();

  useEffect(() => {

  }, [inView])

  const nextPageArea = nextPage ? (
    <Link
      href={`/photos/${topic}/${nextPage}`}
      className="flex items-center"
    >
      <div className="w-full px-2 p-2 border m-1 flex items-center hover:border hover:rounded hover:bg-blue-500 hover:text-white transition ease-in-out duration-500">
        Load More
      </div>
    </Link>
  ) : null;

  return (
    <div ref={ref} className="flex sm:flex-row w-full justify-between items-center px-2 py-4 font-medium sm:w-60 mx-auto">
      {/* {prevPageArea} */}
      {nextPageArea}
    </div>
  );
}
