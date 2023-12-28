"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex flex-col items-center justify-center max-2-6xl p-4 mx-auto sm:flex-row sm:justify-between">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
          <Link href="/">Visuals.</Link>
        </h1>
        {/* change to Link after */}
        <div className="flex items-center gap-4">
          <div className="font-medium uppercase hover:opacity-75">Home.</div>
          <div className="font-medium uppercase hover:opacity-75">Images.</div>
          <div className="font-medium uppercase hover:opacity-75">Videos.</div>
          <div>"Search Bar ... "</div>
        </div>
      </nav>
    </header>
  );
}
