import Link from "next/link";
import React, { RefObject } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TechnologyIcon from "./TechnologyIcon";

const ProjectPreview = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="group relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
        <img src="/personal-website.png" alt="personal" />
        <div className="w-full hidden aspect-square absolute top-0 bg-fk-gray/60 flex-col justify-center items-center gap-6 group-hover:flex">
          <button className="px-4 py-2 rounded-lg bg-fk-white-lighter text-fk-gray">
            View live site
          </button>
          <button className="px-4 py-2 rounded-lg border-2 border-fk-white-lighter text-fk-white-lighter">
            View github code
          </button>
        </div>
      </div>
      <h3 className="text-2xl text-fk-white mb-3">Personal website</h3>
      <div className="flex gap-4">
        <div className="font-medium text-black px-4 py-2 rounded-lg bg-fk-white">
          HTML
        </div>
        <div className="font-medium text-black px-4 py-2 rounded-lg bg-fk-white">
          React
        </div>
        <div className="font-medium text-black px-4 py-2 rounded-lg bg-fk-white">
          Javascript
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
