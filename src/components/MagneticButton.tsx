import { magneticEffect, resetMagneticEffect } from "@/utils/animation";
import gsap, { Power2 } from "gsap";
import React from "react";

type Props = {
  as?: "button" | "a";
};

const MagneticButton = ({}: Props) => {
  const overlayRef = React.useRef();
  const buttonRef = React.useRef<HTMLButtonElement>();

  return (
    <button
      ref={buttonRef}
      className="px-10 py-4 bg-fk-purple group relative overflow-hidden font-bold text-lg p-[2px] text-white rounded-lg will-change-transform"
      onMouseOver={({ clientX, clientY }) => {
        if (buttonRef.current) {
          magneticEffect(
            buttonRef.current,
            buttonRef.current.children[1] as HTMLElement,
            clientX,
            clientY
          );
        }
      }}
      onMouseEnter={() => {
        // overlay animation enter
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            duration: 0.6,
            startAt: {
              y: "76%",
            },
            y: "0%",
            ease: Power2.easeInOut,
          });
        }
      }}
      onMouseLeave={() => {
        if (buttonRef.current) {
          resetMagneticEffect(
            buttonRef.current,
            buttonRef.current.children[1] as HTMLElement
          );
        }
        // overlay animation enter
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            duration: 0.6,
            y: "-76%",
            ease: Power2.easeInOut,
          });
        }
      }}
    >
      <>
        <div
          ref={overlayRef}
          className="h-[200%] w-[150%] rounded-[50%] z-0 bg-[#9162c7] absolute -top-1/2 -left-1/4"
        />
        <div className="flex items-center space-x-4 w-full h-full rounded-lg z-10 group-hover:transparent">
          <span className="z-10">My resume</span>
        </div>
      </>
    </button>
  );
};
export default MagneticButton;
