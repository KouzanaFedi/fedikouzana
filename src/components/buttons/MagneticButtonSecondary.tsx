import { isTouchScreen } from "@/utils";
import { magneticEffect, resetMagneticEffect } from "@/utils/animation";
import gsap, { Power2 } from "gsap";
import React from "react";

type Props = {
  variant?: "contained" | "outlined";
  children: React.ReactNode;
};

const MagneticButtonSecondary = ({
  variant = "contained",
  children,
}: Props) => {
  const overlayRef = React.useRef<HTMLDivElement>();
  const [firstHover, setFirstHover] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${
        variant === "contained"
          ? `dark:bg-fk-gray bg-fk-green text-fk-darkGray dark:text-fk-white `
          : `border-fk-darkGray dark:border-fk-white-lighter text-fk-darkGray dark:text-fk-white  border-2`
      } group relative overflow-hidden font-bold text-lg p-[2px] z-20 rounded-lg cursor-pointer will-change-transform special-element`}
      onMouseOver={({ clientX, clientY }) => {
        if (!isTouchScreen) {
          setFirstHover(false);
          if (ref.current) {
            magneticEffect(
              ref.current,
              ref.current.children[1] as HTMLElement,
              clientX,
              clientY
            );
          }
        }
      }}
      onMouseEnter={() => {
        if (!isTouchScreen) {
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
        }
      }}
      onMouseLeave={() => {
        if (!isTouchScreen) {
          if (ref.current) {
            resetMagneticEffect(
              ref.current,
              ref.current.children[1] as HTMLElement
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
        }
      }}
    >
      <>
        <div
          ref={overlayRef}
          className={`${
            firstHover
              ? "bg-transparent"
              : `bg-fk-green-darker dark:bg-fk-white-lighter`
          } h-[200%] w-[150%] rounded-[50%] -z-10 absolute -top-1/2 -left-1/4`}
        />
        <div className="flex items-center space-x-4 w-full h-full rounded-lg group-hover:transparent">
          <span className="z-10 h-14 w-full flex">{children}</span>
        </div>
      </>
    </div>
  );
};
export default MagneticButtonSecondary;
