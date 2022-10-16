import { useScrollPosition } from "@/hooks/useScrollPosition";
import { isBrowser } from "@/utils";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [showBackToTop, setShowBackToTop] = React.useState<boolean>(false);
  useScrollPosition(({ currPos }) => {
    if (Math.abs(currPos.y) > 150) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });
  return (
    <>
      <Header />
      {children}
      <div
        id="back-to-top"
        className={`cursor-pointer z-50 fixed bottom-4 md:bottom-8 bg-fk-darkGray transition-transform p-4 rounded-full -right-24 ${
          showBackToTop ? "-translate-x-28 md:-translate-x-32" : ""
        } shadow-md group`}
        onClick={() => {
          if (isBrowser) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        <FiArrowUp
          className="group-hover:animate-fk-bounce-animation text-fk-white"
          size={24}
        />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
