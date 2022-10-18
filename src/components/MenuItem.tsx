import { magneticEffect, resetMagneticEffect } from "@/utils/animation";
import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  link: string;
};

const MenuItem = ({ label, link }: Props) => {
  const tagRef = React.useRef<HTMLAnchorElement>();

  return (
    <Link href={link}>
      <a
        className="group"
        ref={tagRef}
        onMouseOver={({ clientX, clientY }) => {
          if (tagRef.current) {
            magneticEffect(
              tagRef.current,
              tagRef.current.children[0] as HTMLElement,
              clientX,
              clientY
            );
          }
        }}
        onMouseLeave={() => {
          if (tagRef.current) {
            resetMagneticEffect(
              tagRef.current,
              tagRef.current.children[0] as HTMLElement
            );
          }
        }}
      >
        <span className="relative text-fk-black-blue dark:text-fk-white after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-px after:bg-fk-black-blue dark:after:bg-fk-white after:transition-all group-hover:after:w-full group-hover:after:left-0">
          {label}
        </span>
      </a>
    </Link>
  );
};

export default MenuItem;
