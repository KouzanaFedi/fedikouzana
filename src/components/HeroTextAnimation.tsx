import React from "react";
import TextScramble from "@/utils/textScramble";
import { motion } from "framer-motion";

const HeroTextAnimation = () => {
  const textRef = React.useRef<HTMLSpanElement>();
  const words = ["web", "mobile"];

  React.useEffect(() => {
    if (textRef.current) {
      const effect = new TextScramble(textRef.current);
      let counter = 0;

      const next = () => {
        effect.setText(words[counter]).then(() => {
          setTimeout(next, 2500);
        });
        counter = (counter + 1) % words.length;
      };

      next();
    }
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.6, x: 50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.4 }}
      className="relative text-center md:text-6xl text-5xl font-header font-bold text-fk-black-blue mb-12 dark:text-fk-white z-10"
    >
      I make <br className="md:hidden" />
      <span ref={textRef} className="text-fk-green">
        web
      </span>{" "}
      <br className="lg:hidden" />
      applications.
    </motion.p>
  );
};

export default HeroTextAnimation;
