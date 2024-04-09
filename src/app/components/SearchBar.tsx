"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Update the currentPath whenever the component mounts or the path changes
    const updatePath = () => {
      setCurrentURL(window.location.pathname);
    };

    // Attach the event listener
    window.addEventListener("popstate", updatePath);

    // Initial path update
    updatePath();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", updatePath);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${currentURL.replace(/\/[^/]+$/, `/${search}`)}`);
    setSearch("");
  };

  console.log(currentURL);
  return (
<form
  className="flex justify-center items-center md:justify-between w-3/4"
  onSubmit={submit}
>
  <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
      {/* Adjust the icon size and color as needed */}
      <BiSearch size={20} className="text-gray-500" />
    </div>
    <input
      className="w-full px-4 py-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search ..."
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</form>
  );
}
