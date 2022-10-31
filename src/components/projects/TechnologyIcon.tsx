import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TechnologyIcon = () => {
  const [showPopOver, setShowPopOver] = React.useState<boolean>(false);

  function show() {
    setShowPopOver(true);
  }

  function hide() {
    setShowPopOver(false);
  }

  return (
    <div
      onMouseEnter={show}
      onMouseOver={show}
      onMouseLeave={hide}
      className="relative w-8 aspect-square group brightness-0 dark:brightness-100 dark:grayscale hover:brightness-100 dark:hover:grayscale-0" //grayscale hover:grayscale-0
    >
      <Image
        title="React"
        src={"/react.png"}
        layout="fill"
        className="w-full h-full"
      />
      <AnimatePresence>
        {showPopOver && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-base shadow pointer-events-none bg-fk-gray whitespace-nowrap absolute -left-5 -top-10 rounded-md text-white px-4 py-1 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0 after:border-4 after:border-transparent after:border-b-0 after:-ml-1 after:-mb-1 after:border-t-fk-gray"
          >
            Next.js
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnologyIcon;
