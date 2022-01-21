export default function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-80 border-t bg-white">
      <div className="py-8 flex flex-col items-center gap-x-4">
        <a
          href="https://www.datapick.tech/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gray-600 hover:text-black"
        >
          Application
        </a>
        <div className="font-medium">
          Datapick © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
