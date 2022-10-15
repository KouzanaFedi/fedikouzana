import { magneticEffect, resetMagneticEffect } from "@/utils/animation";
import gsap, { Power2 } from "gsap";
import React from "react";

type Props = {
  variant?: "contained" | "outlined";
  children: React.ReactNode;
  variantColor?: "green" | "dark";
};

type ColorPalette = {
  mainColor: string;
  hoverColor: string;
  textColor: string;
  textColorHover: string;
};

type ButtonColorPalette = {
  contained: ColorPalette;
  outlined: ColorPalette;
};

const MagneticButton = ({
  variant = "contained",
  variantColor = "green",
  children,
}: Props) => {
  const overlayRef = React.useRef<HTMLDivElement>();
  const [firstHover, setFirstHover] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>();

  const greenVarient: ButtonColorPalette = {
    contained: {
      hoverColor: "fk-green-darker",
      mainColor: "fk-green",
      textColor: "fk-gray",
      textColorHover: "fk-gray",
    },
    outlined: {
      hoverColor: "fk-green-darker",
      mainColor: "fk-gray",
      textColor: "fk-white",
      textColorHover: "fk-white",
    },
  };

  const darkVarient: ButtonColorPalette = {
    contained: {
      hoverColor: "fk-white",
      mainColor: "fk-gray",
      textColor: "fk-white",
      textColorHover: "fk-gray",
    },
    outlined: {
      hoverColor: "fk-white",
      mainColor: "fk-gray",
      textColor: "fk-white",
      textColorHover: "fk-gray",
    },
  };

  const currentPalette = variantColor === "green" ? greenVarient : darkVarient;

  return (
    <div
      ref={ref}
      className={`${
        variant === "contained"
          ? `bg-${currentPalette.contained.mainColor} text-${currentPalette.contained.textColor} hover:text-${currentPalette.contained.textColorHover}`
          : `border-${currentPalette.outlined.hoverColor} text-${currentPalette.outlined.textColor} hover:text-${currentPalette.outlined.textColorHover} border-2`
      } group relative overflow-hidden font-bold text-lg p-[2px] z-20 rounded-lg cursor-pointer will-change-transform special-element`}
      onMouseOver={({ clientX, clientY }) => {
        setFirstHover(false);
        if (ref.current) {
          magneticEffect(
            ref.current,
            ref.current.children[1] as HTMLElement,
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
      }}
    >
      <>
        <div
          ref={overlayRef}
          className={`${
            firstHover
              ? "bg-transparent"
              : `bg-${currentPalette.contained.hoverColor}`
          } h-[200%] w-[150%] rounded-[50%] -z-10 absolute -top-1/2 -left-1/4`}
        />
        <div className="flex items-center space-x-4 w-full h-full rounded-lg z-10 group-hover:transparent">
          <span className="z-10">{children}</span>
        </div>
      </>
    </div>
  );
};
export default MagneticButton;
