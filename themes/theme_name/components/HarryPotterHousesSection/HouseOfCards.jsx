export default function HouseOfCards(props) {
  return (
    <div className="relative z-20">
      <div className="p-5 min-h-[400px] border rounded-2xl bg-gray-800 mt-5 grid grid-rows-[15%,73%,12%]">
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight  text-white font-griffy text-center cursor-default">
            {props.text_h3}
          </h3>
        </div>

        <div>
          <p className="font-normal cursor-default text-gray-200 line-clamp text-center">
            {props.text_p}
          </p>
        </div>
        <div>
          <a
            href="https://www.wizardingworld.com/features/hogwarts-house-meanings"
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 w-auto"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
