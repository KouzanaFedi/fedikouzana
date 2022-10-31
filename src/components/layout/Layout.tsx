import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import DESKTOP_DARK_BG from "~/desktop-dark.png";
import DESKTOP_LIGHT_BG from "~/desktop-light.png";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="absolute top-0 md:-top-80 md:-right-40 z-0 right-0 overflow-hidden select-none">
        <div className="hidden dark:block">
          <Image src={DESKTOP_DARK_BG} alt="bg-mesh" />
        </div>
        <div className="dark:hidden">
          <Image className="dark:hidden" src={DESKTOP_LIGHT_BG} alt="bg-mesh" />
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
