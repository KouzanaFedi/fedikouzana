import Image from "next/image";
import React from "react";
import { ImageData } from "@/cms/types";
import * as Tooltip from "@radix-ui/react-tooltip";

type Props = {
  label: string;
  logo: ImageData;
};

const TechnologyIcon = ({ label, logo }: Props) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="relative w-8 aspect-square group">
            <Image
              src={logo.url}
              alt={logo.basename}
              height={logo.height}
              width={logo.width}
              className="w-full h-full"
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className="TooltipContent shadow bg-fk-darkGray dark:bg-fk-white text-fk-white dark:text-fk-darkGray px-4 py-1 rounded-md will-change-auto duration-300 transition-all"
          >
            {label}
            <Tooltip.Arrow className="fill-fk-darkGray dark:fill-fk-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TechnologyIcon;
