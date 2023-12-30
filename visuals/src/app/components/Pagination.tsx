import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};
export default function Pagination({ topic, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={!prevPage ? " flex items-center" : ""}
    >
      <div className="w-[40px] px-2 py-3 border mx-1 flex items-center">
        {!prevPage ? "..." : null} <FaChevronRight />
      </div>
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${topic}/${prevPage}`}
        className={!nextPage ? "flex items-center" : ""}
      >
        <div className="w-[40px] px-2 py-3 border mx-1 flex items-center">
          <FaChevronLeft /> {!nextPage ? "back" : null}
        </div>
      </Link>

      {pageNums.map((num, i) =>
        page && num === parseInt(page) ? (
          <span
            className="w-[40px] px-3 py-2 border mx-auto border-blue-500 bg-gray-100 cursor-pointer"
            key={i}
          >
            {num}
          </span>
        ) : (
          <Link
            key={i}
            href={`/results/${topic}/${num}`}
            className="w-[40px] px-3 py-2 border mx-1"
          >
            {num}
          </Link>
        )
      )}
    </>
  ) : null;
  return (
    <div className="flex sm:flex-row w-full justify-between items-center px-2 py-4 font-medium sm:w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </div>
  );
}
