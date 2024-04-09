"use server"

export const fetchPhotos = async (
  page: number,
) => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?page=${page}&per_page=40`,
    {
      headers: {
        Authorization:
          "rOYg6JF6uFJepB3Aa1wgarn2Xi11nWS0hqDyHiZXsQBwgFiPP2DUcYVp",
      },
    }
  );

  const data = await res.json();

  return data;
};
