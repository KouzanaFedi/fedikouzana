import { SiLinkedin } from "react-icons/si";
import * as Settings from "@/utils/settings";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import React from "react";
import Link from "next/link";
import MenuItem from "../MenuItem";

const Header = () => {
  const [headerWithBg, setHeaderWithBg] = React.useState<boolean>(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) > 90) {
      setHeaderWithBg(true);
    } else {
      setHeaderWithBg(false);
    }
  });

  return (
    <header
      className={`w-full fixed top-0 z-50 ${
        headerWithBg ? "bg-fk-darkGray/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <Link href={"/"}>
          <img className="w-40 md:w-64 cursor-pointer" src={"/logo.svg"} />
        </Link>
        <ul className="flex gap-8">
          <MenuItem label="About me" link="/#about-me" />
          <MenuItem label="Portfolio" link="/#projects" />
          <MenuItem label="Career" link="/#carrer" />
          <MenuItem label="Contact" link="#contact-me" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
