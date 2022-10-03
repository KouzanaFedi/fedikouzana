import Link from "next/link";
import React, { RefObject } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TechnologyIcon from "./TechnologyIcon";

const ProjectPreview = () => {
  const overLayRef = React.useRef<HTMLDivElement>();

  function onMouseEnter() {
    if (overLayRef.current) {
      overLayRef.current.style.display = "flex";
    }
  }

  function onMouseLeave() {
    if (overLayRef.current) {
      overLayRef.current.style.display = "none";
    }
  }

  return (
    <div className="w-full flex flex-col items-center overflow-hidden lg:flex-row group even:lg:flex-row-reverse">
      <div
        className="w-full lg:w-2/3 cursor-pointer relative lg:aspect-video max-h-96 aspect-square shadow-md rounded-t-[32px] bg-gray-900 pt-16 pr-16 pl-16 lg:pl-8 group-even:lg:pl-16 group-even:lg:pr-8 overflow-hidden hover:scale-90 transition-transform"
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseLeave}
      >
        <img
          src={"/personal-website.png"}
          className="w-full h-full object-cover"
        />
        <div
          ref={overLayRef}
          className="absolute gap-4 top-0 bottom-0 left-0 right-0 justify-center items-center bg-fk-darkGray/80 w-full h-full hidden transition-transform"
        >
          {[0, 1, 2, 3].map((i) => (
            <TechnologyIcon key={i} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 mt-4 lg:mt-0 z-10 lg:-ml-8 ml-0 lg:pr-16 group-even:lg:-mr-8 group-even:lg:pl-16 group-even:lg:pr-0">
        <p className="text-fk-white font-light mb-2 tracking-widest rounded-sm uppercase">
          Personal project
        </p>
        <h3 className="text-xl font-semibold text-white mb-4">
          Fedi Kouzana - Personal Portfollio
        </h3>
        <p className="text-fk-white-lighter mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href={"/projects#project"}>
          <a className="flex items-center gap-2 cursor-pointer">
            <span className="text-white">More info</span>
            <FiArrowUpRight className="text-white" size={20} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
