import type { ImagesRes } from "@/models/image";

function getPage(url: string) {
  const { searchParams } = new URL(url);
  return searchParams.get("page");
}

export default function getPrevNextPages(images: ImagesRes) {
  let nextPage = images?.next_page ? getPage(images.next_page) : null;

  const prevPage = images?.prev_page ? getPage(images.prev_page) : null;

  const totalPages =
    images.total_results % images.per_page
      ? Math.ceil(images.total_results / images.per_page)
      : images.total_results / images.per_page + 1;

  if (prevPage && parseInt(prevPage) + 5 < totalPages) {
    nextPage = (parseInt(prevPage) + 5).toString();
  }

  if (nextPage && parseInt(nextPage) >= totalPages) nextPage = null;

  return { prevPage, nextPage };
}