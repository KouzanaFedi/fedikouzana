import { FiMonitor } from "react-icons/fi";
import { IconType } from "react-icons/lib";

type Props = {
  Icon: IconType;
  title: string;
  content: string;
};

const InforCard = ({ content, Icon, title }: Props) => {
  return (
    <div className="special-element md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray rounded-[32px] px-8 py-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <div className="rounded-full text-fk-white bg-fk-green-darker p-2">
            <Icon size={24} />
          </div>
          <h3 className="font-bold text-2xl text-fk-green-darker">{title}</h3>
        </div>
      </div>
      <p className="text-fk-white font-bold">{content}</p>
    </div>
  );
};

export default InforCard;
