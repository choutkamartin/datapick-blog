import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative bg-white">
      <div className="relative w-full h-48 lg:h-72 bg-black">
        <Image
          src="/images/posts/shubham-dhage-gC_aoAjQl2Q-unsplash.jpg"
          alt="Header image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="flex items-center border">
        <div className="absolute z-20 left-2/4 -translate-x-2/4 bg-white rounded-full w-24 h-24 lg:w-36 lg:h-36 p-6 lg:p-8 border">
          <div className="relative w-full h-full">
            <Image src="/logo.svg" layout="fill" alt="Datapick logo" />
          </div>
        </div>
        <div className="flex items-center gap-x-8 px-4 py-6 lg:py-8 md:px-8 lg:px-20 xl:px-40 2xl:px-80 ">
          <nav className="flex justify-between lg:justify-start gap-x-16 items-center w-full">
            <Link href="/">
              <a className="font-medium text-lg text-gray-600 hover:text-black">
                Blog
              </a>
            </Link>
            <a
              href="https://www.datapick.tech/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-lg text-gray-600 hover:text-black"
            >
              Application
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
