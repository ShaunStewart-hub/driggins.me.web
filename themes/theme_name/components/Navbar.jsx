export default function Navbar() {
  return (
    <header>
      <nav className=" bg-black fixed w-full top-0 border-b  z-50 max-w-[1900px] m-auto mt-0 mb-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="#" className="flex items-center">
            <img
              src="./img/40223.png"
              className="h-8 mr-3 invert"
              alt="Power Button Symbol: 1 inside a 0"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Da&apos;shaun Riggins
            </span>
          </a>
          <div className="flex md:order-2">
            <a href="https://github.com/Amon-DR" target="_blank">
              <button
                type="button"
                className="text-white bg-slate-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0bg-blue-600 hover:bg-blue-900 focus:ring-blue-800"
              >
                GitHub
              </button>
            </a>
            {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
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
