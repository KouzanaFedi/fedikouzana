import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import DESKTOP_DARK_BG from "~/desktop-dark.webp";
import DESKTOP_LIGHT_BG from "~/desktop-light.webp";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute top-0 left-0 lg:left-[unset] w-full lg:w-[70%] md:-top-96 md:-right-40 z-0 right-0 select-none">
        <div className="opacity-0 select-none dark:opacity-100 transition-opacity w-full">
          <Image
            src={DESKTOP_DARK_BG}
            alt="bg-mesh"
            className="blur-xl w-full "
            priority
            quality={40}
          />
        </div>
        <div className="absolute top-0 dark:opacity-0 transition-opacity w-full">
          <Image
            src={DESKTOP_LIGHT_BG}
            alt="bg-mesh"
            className="blur-xl w-full "
            priority
            quality={40}
          />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
