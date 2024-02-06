import Link from "next/link";
export default function About() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="h-full sm:h-[40vh] flex items-center">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 p-4">
          <div className="p-4">
            <h1 className="text-5xl font-bold tracking-wider">
              EVERYTHING YOU
            </h1>
            <h1 className="text-5xl font-bold tracking-wider">NEED TO KNOW</h1>
            <p className="text-gray-400 font-light tracking-widest">
              GET TO KNOW VISUALS.
            </p>
          </div>
          <p className="leading-loose text-gray-400 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col items-center jusitfy-center sm:grid sm:grid-cols-3 sm:gap-6 sm:place-items-start">
        <div className="border p-8 shadow h-full">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-justify leading-snug">
            Our mission is to curate a diverse collection of high-quality visual
            content, showcasing the brilliance of artists and videographers from
            around the world. We strive to create a platform that celebrates
            creativity and allows viewers to immerse themselves in the magic of
            visual arts.
          </p>
        </div>
        <div className="border p-8 shadow h-full">
          <h2 className="text-xl font-bold mb-2">What Sets Us Apart</h2>
          <p className="text-justify leading-snug">
            Visuals stands out by leveraging the Pexels API, a rich source of
            free stock photos and videos. This partnership allows us to offer an
            extensive and ever-growing library of visuals to our users. With the
            Pexels API, we can provide a seamless and dynamic gallery
            experience, ensuring that our users always have access to stunning
            and diverse visual content.
          </p>
        </div>
        <div className="border p-8 shadow h-full">
          <h2 className="text-xl font-bold mb-2">Explore, Create, Inspire</h2>
          <p className="text-justify leading-snug">
            Whether you're an artist looking to showcase your work or an
            enthusiast seeking inspiration, Visuals is your go-to destination.
            Explore our curated galleries and be inspired by the beauty of
            visual arts.
          </p>
        </div>
      </div>
      <div>
        Landscapes to captivating narratives, our content is sourced from{" "}
        <Link
          className="text-emerald-500 border-b border-emerald-500"
          href="https://www.pexels.com/"
        >
          Pexels
        </Link>
        , ensuring the highest quality for your creative endeavors.
      </div>
    </section>
  );
}
