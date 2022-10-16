import Cursor from "@/components/Cursor";
import { KEYS, THEMES } from "@/utils";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [display, setDisplay] = React.useState(false);

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

  return (
    <div className="bg-red-50 dark:bg-fk-gray transition-colors duration-100 ease-linear">
      <Component {...pageProps} />
      {display && <Cursor />}
    </div>
  );
}

export default MyApp;
