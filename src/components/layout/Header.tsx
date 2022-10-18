import useScroll from "@/hooks/useScroll";
import React from "react";
import Link from "next/link";
import MenuItem from "../MenuItem";
import { KEYS, THEMES } from "@/utils";

const Header = () => {
  const SCROLL_THREASH_HOLD = 90;
  const [headerWithBg, setHeaderWithBg] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState("dark");
  const scroll = useScroll();

  React.useEffect(() => {
    if (scroll >= SCROLL_THREASH_HOLD) {
      setHeaderWithBg(true);
    } else {
      setHeaderWithBg(false);
    }
  }, [scroll]);

  React.useEffect(() => {
    const themeValue = localStorage.getItem(KEYS.THEME);
    if (themeValue === THEMES.DARK || themeValue === THEMES.LIGHT) {
      setTheme(themeValue);
    }
  }, []);

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
        headerWithBg
          ? "bg-white/90 dark:bg-fk-darkGray/90 backdrop-blur-sm"
          : ""
      } transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <Link href={"/"}>
          <img
            className="w-40 md:w-64 cursor-pointer hidden dark:block"
            src={"/logo.svg"}
          />
        </Link>
        <Link href={"/"}>
          <img
            className="w-40 md:w-64 cursor-pointer dark:hidden"
            src={"/logo-black.svg"}
          />
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
