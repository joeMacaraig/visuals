"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-center items-center md:justify-between"
      onSubmit={submit}
    >
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <BiSearch size={20} className="text-gray-500" />
        </div>
        <input
          className="block sm:w-60 px-4 py-2 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search ..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
