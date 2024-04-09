"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-opacity-75 sticky top-0 z-10 backdrop-blur bg-white">
      <nav className="flex max-w-7xl mx-auto flex-col items-center justify-center px-4 py-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-blue-600">
            <Link href="/">Visuals.</Link>
          </h1>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about-us" className="Sky Blue (#87CEEB)">
              About.
            </Link>
            <Link href="/photos/curated" className="hover:opacity-75">
              Images.
            </Link>
            <Link href="/videos/popular" className="hover:opacity-75">
              Videos.
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 mr-2 font-medium">
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
