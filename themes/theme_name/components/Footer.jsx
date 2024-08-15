export default function Footer() {
  return (
    <footer className=" rounded-lg shadow bg-black cursor-default">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm tsm:text-center text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Driggins.me™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="#About" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li> */}
          <li>
            <a href={"mailto:DrigginsMail@proton.me"}>Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
