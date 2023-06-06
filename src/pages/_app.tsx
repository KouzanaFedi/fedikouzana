import Cursor from "@/components/Cursor";
import useScroll from "@/hooks/useScroll";
import { isTouchScreen, KEYS, THEMES } from "@/utils";
import { AnimatePresence, isBrowser } from "framer-motion";
import { AppProps } from "next/app";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const SCROLL_THREASH_HOLD = 150;

  const [display, setDisplay] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState<boolean>(false);
  const scroll = useScroll();

  React.useEffect(() => {
    setDisplay(true);

    //handling themes
    const theme = localStorage.getItem(KEYS.THEME);
    if (!theme) {
      localStorage.setItem(KEYS.THEME, THEMES.DARK);
      document.body.classList.add("dark");
    } else {
      if (theme === THEMES.DARK) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    }
  }, []);

  React.useEffect(() => {
    if (scroll >= SCROLL_THREASH_HOLD) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  }, [scroll]);

  return (
    <>
      <Script
        async
        id="gtag"
        src="https://www.googletagmanager.com/gtag/js?id=G-B46Y84WV08"
      ></Script>
      <Script id="dataLayer">
        {` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-B46Y84WV08');`}
      </Script>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="relative bg-fk-bg-light dark:bg-fk-gray transition-colors duration-100 ease-linear selection:bg-fk-green-darker selection:text-fk-white dark:selection:text-fk-gray">
        <AnimatePresence key={pageProps?.projectData?.id} mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
        <Analytics />
        {display && !isTouchScreen && <Cursor />}
        <div
          id="back-to-top"
          className={`cursor-pointer z-20 fixed bottom-4 md:bottom-8 bg-fk-darkGray transition-transform p-4 rounded-full -right-24 ${
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
      </div>
    </>
  );
}

export default MyApp;
