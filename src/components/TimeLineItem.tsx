const TimeLineItem = () => {
  return (
    <li className="mb-10 ml-6">
      <span className="-mt-2 w-10 h-10 -left-5 absolute bg-fk-pink/30 flex justify-center items-center rounded-full">
        <span className="flex justify-center items-center w-6 h-6 rounded-full bg-fk-pink">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        Flowbite Application UI v2.0.0{" "}
        <span className="text-sm mr-2 px-2.5 font-semibold py-0.5 rounded bg-fk-orange/40 text-fk-orange ml-3">
          Latest
        </span>
      </h3>
      <p className="mb-4 text-base font-normal text-gray-400">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
    </li>
  );
};

export default TimeLineItem;
