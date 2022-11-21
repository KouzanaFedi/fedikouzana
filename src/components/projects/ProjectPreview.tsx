import { ImageData } from "@/cms/types";
import { isTouchScreen } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  img: ImageData;
  heading?: "h2" | "h3";
  title: string;
  order: number;
  alias: string;
};

const ProjectPreview = ({
  img,
  heading = "h3",
  title,
  alias,
  order,
}: Props) => {
  const Heading = heading;
  const [hover, setHover] = React.useState(false);
  const rootRef = React.useRef<HTMLAnchorElement>();
  const MOST_X = 10;
  const MOST_Y = 10;

  function rotateToMouse(e: MouseEvent) {
    if (!isTouchScreen) {
      if (rootRef.current) {
        rootRef.current.style.transition = "";
        const x = e.offsetX;
        const y = e.offsetY;

        const { width, height } = rootRef.current.getBoundingClientRect();
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        // calculate angle
        const rotationY = ((x - halfWidth) / halfWidth) * MOST_X;
        const rotationX = ((y - halfHeight) / halfHeight) * MOST_Y;

        // set rotation
        rootRef.current.style.transform = `
        perspective(800px)
        scale3d(1.04, 1.04, 1.04)
        rotateY(${rotationY}deg) rotateX(${rotationX}deg)
        `;
      }
    }
  }

  function mouseLeave(e: MouseEvent) {
    if (rootRef.current) {
      rootRef.current.style.transition = "transform 0.5s ease-in-out";
      rootRef.current.style.transform = `rotateY(0) rotateX(0)`;
    }
  }

  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.addEventListener("mousemove", rotateToMouse);
      rootRef.current.addEventListener("mouseleave", mouseLeave);
    }
    return () => {
      if (rootRef.current) {
        rootRef.current.removeEventListener("mousemove", rotateToMouse);
        rootRef.current.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, [rootRef.current]);

  return (
    <Link href={`/projects/${alias}`}>
      <a
        ref={rootRef}
        className="group inline-block rotate3d relative w-full h-full pl-8 lg:pl-14 pb-4 will-change-transform select-none"
      >
        <div
          className="special-element relative rounded-2xl h-full aspect-square overflow-hidden shadow-lg dark:shadow-fk-darkGray pointer-events-none"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <Image
            src={img.url}
            height={img.height}
            width={img.width}
            alt={img.basename}
          />
          <div className="absolute z-10 top-0 w-full h-full bg-gradient-to-tr from-white dark:from-black to-black/0" />
        </div>
        <div
          className="special-element w-2/3 lg:w-1/2 absolute left-0 bottom-8 z-20 flex flex-col gap-4 info-deth pointer-events-none"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <Heading className="font-black lg:text-2xl uppercase text-fk-black-blue dark:text-fk-white">
            {title}
          </Heading>
          <div className="py-0.5 bg-fk-green w-full" />
          <div className="flex items-center gap-8">
            <span className="text-fk-white-lighter text-xs md:text-sm">
              {order.toString().padStart(2, "0")}
            </span>

            <FiArrowRight
              className={`text-fk-white-lighter transition-transform duration-200 ease-in-out ${
                hover ? "translate-x-2" : ""
              }`}
              size={18}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectPreview;
