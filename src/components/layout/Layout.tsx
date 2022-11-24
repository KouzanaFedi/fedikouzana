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
    <div className="overflow-x-hidden">
      <Header />
      <div className="absolute top-0 left-0 lg:left-[unset] w-full lg:w-[70%] md:-top-96 md:-right-40 z-0 right-0 overflow-hidden select-none">
        <div className="hidden select-none dark:block w-auto">
          <Image
            src={DESKTOP_DARK_BG}
            layout="responsive"
            quality={100}
            alt="bg-mesh"
            className="blur-xl"
          />
        </div>
        <div className="dark:hidden w-full">
          <Image
            layout="responsive"
            quality={100}
            src={DESKTOP_LIGHT_BG}
            alt="bg-mesh"
            className="blur-xl"
          />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
