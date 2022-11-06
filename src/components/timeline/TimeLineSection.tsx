import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import VerticaleTimeLine from "./VerticalTimeLine";

const TimeLineSection = () => {
  const [proTimeLine, setProTimeLine] = React.useState<boolean>(true);

  return (
    <section id="carrer" className="pt-24 md:p-4 md:pt-24">
      <div className="container mx-auto md:px-8 space-y-12">
        <h2 className="text-fk-black-blue dark:text-fk-white text-4xl text-center md:text-start md:text-5xl font-bold">
          My carrer so far
        </h2>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          className="w-full rounded-lg bg-white overflow-hidden dark:bg-fk-darkGray py-9 px-4 md:px-9"
        >
          <div className="flex justify-center md:justify-start">
            <div className="w-fit">
              <label className="timeline-switch relative w-full rounded-lg p-2 bg-fk-gray flex items-center">
                <input
                  className="opacity-0 w-0 h-0"
                  onChange={() => {
                    setProTimeLine(!proTimeLine);
                  }}
                  type="checkbox"
                />
                <span className="timeline-slider absolute w-32 h-8 rounded-lg bg-fk-green z-10 transition-transform duration-700" />
                <span className="timeline-option-1 z-20 mr-4 text-sm font-bold w-32 h-8 flex justify-center items-center rounded-lg cursor-pointer">
                  Professional
                </span>
                <span className="timeline-option-2 z-20 w-32 text-sm font-bold h-8 flex justify-center items-center cursor-pointer">
                  Academic
                </span>
              </label>
            </div>
          </div>
          <div className="w-full mt-8">
            <AnimatePresence mode="wait">
              {!proTimeLine ? (
                <motion.div
                  key={"pro"}
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <VerticaleTimeLine />
                </motion.div>
              ) : (
                <motion.div
                  key={"acad"}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <VerticaleTimeLine />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeLineSection;
