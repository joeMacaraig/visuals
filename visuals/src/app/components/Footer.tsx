import Link from "next/link";

//icons
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center justify-center w-full">
        <Link
          href="https://github.com/joeMacaraig"
          className="p-2 m-5 text-violet-500 hover:text-violet-300 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FiGithub size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/josephmacaroni14/"
          className="p-2 m-5 text-violet-500 hover:text-violet-300 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joseph-macaraig/"
          className="p-2 m-5 text-violet-500 hover:text-violet-300 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <SlSocialLinkedin size={24} />
        </Link>
        <Link
          href={`mailto:jbmacaraig14@gmail.com`}
          className="p-2 m-5 text-violet-500 hover:text-violet-300 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <TfiEmail size={24} />
        </Link>
      </div>
      <div className="font-light tracking-wide pb-2">
        Built by: Joseph Bryan Macaraig
      </div>
    </div>
  );
}