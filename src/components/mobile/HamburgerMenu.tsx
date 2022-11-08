import React from "react";

interface Props {
  isOpen?: boolean;
  changeState: () => void;
}

const HamburgerMenu = ({ isOpen = false, changeState }: Props) => {
  return (
    <button
      className="text-fk-gray dark:text-fk-white w-10 h-10 relative lg:hidden focus:outline-none"
      onClick={changeState}
    >
      <span className="sr-only">Open main menu</span>
      <div
        className={`block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export { HamburgerMenu };
