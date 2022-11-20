import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

type Props = {
  Icon: IconType;
  title: string;
  content: string;
  delay?: number;
};

const InforCard = ({ content, Icon, title, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, skewX: -12, x: -50, y: -50 }}
      whileInView={{ opacity: 1, scale: 1, skewX: 0, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        type: "spring",
        bounce: 0.3,
        delay,
      }}
      className="special-element md:w-1/2 lg:w-full flex flex-col gap-y-4 bg-fk-darkGray rounded-[32px] px-8 py-6"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <div className="rounded-full text-fk-white bg-fk-green-darker p-2">
            <Icon size={24} />
          </div>
          <h3 className="font-bold text-2xl text-fk-green-darker">{title}</h3>
        </div>
      </div>
      <p className="text-fk-white font-bold">
        {content}
      </p>
    </motion.div>
  );
};

export default InforCard;
