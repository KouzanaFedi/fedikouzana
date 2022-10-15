import Cursor from "@/components/Cursor";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {display && <Cursor />}
    </>
  );
}

export default MyApp;
