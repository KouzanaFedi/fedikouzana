import { isTouchScreen } from "@/utils";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  img: string;
  heading?: "h2" | "h3";
};

const ProjectPreview = ({ img, heading = "h3" }: Props) => {
  const Heading = heading;
  const [hover, setHover] = React.useState(false);
  const rootRef = React.useRef<HTMLAnchorElement>();
  const bounds = React.useRef<DOMRect>();

  function rotateToMouse(e: MouseEvent) {
    if (!isTouchScreen) {
      if (bounds.current && rootRef.current) {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        //@ts-ignore
        const leftX = mouseX - e.currentTarget.offsetLeft;
        //@ts-ignore
        const topY = mouseY - e.currentTarget.offsetTop;
        const center = {
          x: leftX - bounds.current.width / 2,
          y: topY - bounds.current.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        rootRef.current.style.transform = `
        perspective(1000px)
        scale3d(1.04, 1.04, 1.04)
        rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 4}deg
        )
        `;
      }
    }
  }

  function mouseLeave(e: MouseEvent) {
    if (rootRef.current) {
      rootRef.current.style.transform = "";
    }
  }

  React.useEffect(() => {
    if (rootRef.current) {
      bounds.current = rootRef.current.getBoundingClientRect();
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
    <Link href={"/project"}>
      <a
        ref={rootRef}
        className="group rotate3d relative w-full h-full pl-14 pb-4 will-change-transform"
      >
        <div
          className="special-element relative rounded-2xl h-full aspect-square overflow-hidden shadow-md"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <img
            src={img}
            alt="portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute z-10 top-0 w-full h-full bg-gradient-to-tr from-white dark:from-black to-black/0" />
        </div>
        <div
          className="special-element absolute left-0 bottom-0 z-20 flex flex-col gap-4 info-deth"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <Heading className="font-black md:text-2xl text-sm uppercase text-fk-black-blue dark:text-fk-white ">
            Personal <br />
            Porftolio
          </Heading>
          <div className="py-0.5 bg-fk-green w-full" />
          <span className="text-fk-white-lighter text-xs md:text-sm">01</span>

          <FiArrowRight
            className={`text-fk-white-lighter transition-transform duration-200 ease-in-out ${
              hover ? "translate-x-2" : ""
            }`}
            size={18}
          />
        </div>
      </a>
    </Link>
  );
};

export default ProjectPreview;
