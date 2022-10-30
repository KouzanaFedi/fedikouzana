import Image from "next/image";
import React from "react";

const TechnologyIcon = () => {
  const popUpRef = React.useRef<HTMLImageElement>(null);

  return (
    <div
      onMouseEnter={() => {
        if (popUpRef.current) {
          popUpRef.current.style.scale = "1";
          popUpRef.current.style.opacity = "1";
          popUpRef.current.style.transform = "translateX(-  .25rem)";
        }
      }}
      onMouseLeave={() => {
        if (popUpRef.current) {
          popUpRef.current.style.scale = ".75";
          popUpRef.current.style.opacity = "0";
          popUpRef.current.style.transform = "unset";
        }
      }}
      className="relative w-12 aspect-square group"
    >
      <Image
        title="React"
        src={"/react.png"}
        layout="fill"
        className="w-full h-full"
      />
      <span
        ref={popUpRef}
        className="scale-75 text-base duration-300 opacity-0 pointer-events-none bg-gray-900 whitespace-nowrap absolute -top-full rounded-md text-white px-2 -translate-x-1/2
after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0 after:border-4 after:border-transparent after:border-b-0 after:-ml-1 after:-mb-1 after:border-t-gray-900"
      >
        Next.js
      </span>
    </div>
  );
};

export default TechnologyIcon;
