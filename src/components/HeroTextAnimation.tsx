import TextScramble from "@/utils/textScramble";
import React from "react";

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
    <p className="text-4xl text-center md:text-5xl font-header font-bold text-fk-white z-10">
      I create{" "}
      <span ref={textRef} className="text-fk-green">
        web based
      </span>{" "}
      applications.
    </p>
  );
};

export default HeroTextAnimation;
