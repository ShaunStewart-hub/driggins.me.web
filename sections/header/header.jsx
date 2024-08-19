import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className=" bg-black fixed w-full top-0 border-b  z-50 max-w-[1900px] m-auto mt-0 mb-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="#" className="flex items-center">
            <Image
              src="/img/40223.png"
              className="h-8 w-8 mr-3 invert"
              alt="Power Button Symbol: 1 inside a 0"
              width={200}
              height={200}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Shaun Stewart
            </span>
          </a>
          <div className="flex md:order-2">
            <a href="mailto:contact@driggins.me" target="_blank">
              <button
                type="button"
                className="text-white bg-slate-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0bg-blue-600 hover:bg-blue-900 focus:ring-blue-800"
              >
                contact@driggins.me
              </button>
            </a>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="block py-2 pl-3 pr-4 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
