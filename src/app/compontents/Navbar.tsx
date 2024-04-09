"use client";
import { useState } from "react";
import { Logo } from "./Logo";
import { LiaGripLinesSolid, LiaTimesSolid } from "react-icons/lia";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="backdrop-blur-sm bg-white/25 h-[7.5vh]">
      <nav className="max-w-6xl mx-auto px-6 py-2 relative">
        <div className="flex items-center justify-between visible md:invisible">
          <div className="flex items-center text-4xl font-bold tracking-tight">
            <Logo />
            <h1>VISUALS.</h1>
          </div>
          {click ? (
            <LiaTimesSolid className="text-4xl" />
          ) : (
            <div>
              <LiaGripLinesSolid className="text-4xl " />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between invisible md:visible md:absolute md:top-0 md:right-0 md:left-0 md:pt-2 md:px-6">
          <div className="flex gap-4 font-medium">
            <p className="hover:font-bold hover:cursor-pointer duration-300">PHOTOS.</p>
            <p className="hover:font-bold hover:cursor-pointer duration-300">VIDEOS.</p>
          </div>
          <div className="flex items-center text-3xl font-bold tracking-tight">
            <Logo />
            <h1>VISUALS.</h1>
          </div>

          <div className="flex gap-4 font-medium">
            <p className="hover:font-bold hover:cursor-pointer duration-300">LOGIN.</p>
            <p className="hover:font-bold hover:cursor-pointer duration-300">SIGNUP.</p>
          </div>
        </div>
      </nav>
    </header>
  );
};
