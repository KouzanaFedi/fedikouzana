import useScroll from "@/hooks/useScroll";
import React from "react";
import Link from "next/link";
import MenuItem from "../MenuItem";
import { KEYS, THEMES } from "@/utils";
import Image from "next/image";
import lightIcon from "~/light.svg";
import darkIcon from "~/dark.svg";
import { HamburgerMenu } from "../mobile/HamburgerMenu";
import MobileMenu from "../mobile/MobileMenu";
import { AnimatePresence } from "framer-motion";
import { HEADER_ITEMS } from "@/utils/settings";
import Branding from "./Branding";

const Header = () => {
  const SCROLL_THREASH_HOLD = 90;
  const [headerWithBg, setHeaderWithBg] = React.useState<boolean>(false);
  const [menuOpen, setOpenMenu] = React.useState<boolean>(false);
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
    <>
      <header
        className={`w-screen fixed top-0 z-50 ${
          headerWithBg
            ? "bg-white/90 dark:bg-fk-darkGray/90 backdrop-blur-sm"
            : ""
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-6">
          <Link aria-label="<KOUZANA/> branding" className="w-40 md:w-64 cursor-pointer" href={"/"}>
            <Branding />
          </Link>
          <div className="flex items-center gap-12">
            <ul className="hidden items-center gap-8 lg:flex list-none">
              {HEADER_ITEMS.map((item, index) => (
                <MenuItem key={index} label={item.label} link={item.link} />
              ))}
            </ul>
            <div className="flex items-center gap-x-4">
              <label className="switch relative inline-block w-[49px] h-6">
                <input
                  className="w-0 h-0 opacity-0"
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
                <span className="slider rounded-full absolute cursor-pointer inset-0 bg-fk-white duration-300 before:absolute before:h-5 before:w-5 before:z-[2] before:left-0.5 before:bottom-0.5 before:bg-fk-gray before:duration-300 before:rounded-full"></span>
                <div className="absolute left-1 top-[3px] z-[1]">
                  <Image src={lightIcon} alt="light-icon" />
                </div>
                <div className="absolute right-1 top-1 z-[1]">
                  <Image src={darkIcon} alt="dark-icon" />
                </div>
              </label>
              <HamburgerMenu
                isOpen={menuOpen}
                changeState={() => setOpenMenu(!menuOpen)}
              />
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            menu={HEADER_ITEMS}
            closeMenu={() => setOpenMenu(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
