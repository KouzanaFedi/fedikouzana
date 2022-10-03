import { SiLinkedin } from "react-icons/si";
import * as Settings from "@/utils/settings";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import React from "react";
import Link from "next/link";

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
      <div
        className={`container mx-auto flex justify-between px-4 py-6 border-fk-orange ${
          headerWithBg ? "" : "border-b"
        }`}
      >
        <Link href={"/"}>
          <a className="flex">
            <img className="w-40 md:w-64" src={"/logo.svg"} />
          </a>
        </Link>
        <Link href={Settings.LINKEDIN_URI}>
          <a target="_blank" className="flex items-center space-x-4">
            <span className="text-fk-white font-medium">Get in touch</span>
            <SiLinkedin size={24} className="text-fk-white" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
