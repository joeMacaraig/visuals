"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-opacity-75 backdrop-blur-lg backdrop-filter-none bg-white">
      <nav className="flex flex-col items-center justify-center px-4 py-3 mx-auto sm:flex-row sm:justify-between shadow">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-blue-600">
          <Link href="/">Visuals.</Link>
        </h1>
        <div className="flex items-center gap-6 mr-2 font-medium">
          <Link href="/about-us" className="Sky Blue (#87CEEB)">
            About.
          </Link>
          <Link href="/photos/curated" className="hover:opacity-75">
            Images.
          </Link>
          <Link href="/videos/popular" className="hover:opacity-75">
            Videos.
          </Link>
          <div className="">
            <button className="px-4 py-2 bg-blue-500 border rounded-full text-white mr-3 hover:opacity-75">
              Log in
            </button>
            <button className="px-4 py-2 bg-gray-300 border rounded-full text-black hover:opacity-75">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
