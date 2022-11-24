import * as Tooltip from "@radix-ui/react-tooltip";
import { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  label: string;
};

const FooterIcon = ({ icon, label }: Props) => {
  const Icon = icon;
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="inline-block align-text-top mx-2">
            <Icon size={20} />
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

export default FooterIcon;
