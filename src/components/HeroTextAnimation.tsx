import React from "react";
import TextScramble from "@/utils/textScramble";
import { motion } from "framer-motion";

const HeroTextAnimation = () => {
  const textRef = React.useRef<HTMLSpanElement>();
  const words = ["web based", "mobile"];

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
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.3, delay: 0.4 }}
      className="text-center text-5xl font-header font-bold text-fk-black-blue mb-12 dark:text-fk-white z-10"
    >
      I create <br className="md:hidden" />
      <span ref={textRef} className="text-fk-green">
        web based
      </span>{" "}
      <br className="lg:hidden" />
      applications.
    </motion.p>
  );
};

export default HeroTextAnimation;
