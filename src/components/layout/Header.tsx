import { SiLinkedin } from "react-icons/si";
import * as Settings from "@/utils/settings";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import React from "react";
import Link from "next/link";
import MenuItem from "../MenuItem";
import { KEYS, THEMES } from "@/utils";

const Header = () => {
  const [headerWithBg, setHeaderWithBg] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    const themeValue = localStorage.getItem(KEYS.THEME);
    if (themeValue === THEMES.DARK || themeValue === THEMES.LIGHT) {
      setTheme(themeValue);
    }
  }, []);

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) > 90) {
      setHeaderWithBg(true);
    } else {
      setHeaderWithBg(false);
    }
  });

  function changeTheme(themeVal: string) {
    localStorage.setItem(KEYS.THEME, themeVal);
    if (themeVal === THEMES.DARK) {
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
    }
  }

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
        <div className="flex items-center gap-12">
          <ul className="flex gap-8">
            <MenuItem label="About me" link="/#about-me" />
            <MenuItem label="Portfolio" link="/#projects" />
            <MenuItem label="Career" link="/#carrer" />
            <MenuItem label="Contact" link="#contact-me" />
          </ul>
          <label className="switch">
            <input
              onChange={({ target: { checked } }) => {
                if (!checked) {
                  setTheme(THEMES.DARK);
                  changeTheme(THEMES.DARK);
                } else {
                  setTheme(THEMES.LIGHT);
                  changeTheme(THEMES.LIGHT);
                }
              }}
              checked={!(theme === THEMES.DARK)}
              type="checkbox"
            />
            <span className="slider round"></span>
            <img className="light-icon" src="/light.svg" alt="light-icon" />
            <img className="dark-icon" src="/dark.svg" alt="dark-icon" />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
