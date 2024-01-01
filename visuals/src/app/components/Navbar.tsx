"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex flex-col items-center justify-center max-2-6xl p-4 mx-auto sm:flex-row sm:justify-between">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
          <Link href="/">Visuals.</Link>
        </h1>
        <div className="flex items-center gap-4">
          <Link href="/" className="font-medium uppercase hover:opacity-75">
            Home.
          </Link>
          <Link
            href="/photos/curated"
            className="font-medium uppercase hover:opacity-75"
          >
            Images.
          </Link>
          <Link href="/videos/curated" className="font-medium uppercase hover:opacity-75">
            Videos.
          </Link>
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
