import React from "react";
import useScrollBlock from "@/hooks/useScrollBlock";
import { HeaderItem } from "../layout/Header";
import MobileMenuItem from "./MobileMenuItem";
import { motion } from "framer-motion";

type Props = {
  menu: HeaderItem[];
  closeMenu: () => void;
};

const MobileMenu = ({ menu, closeMenu }: Props) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {
    blockScroll();
    return () => allowScroll();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bg-fk-white dark:bg-fk-gray inset-0 z-30 lg:hidden"
    >
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
        className="container mx-auto pt-32 pb-16 flex justify-center h-screen"
      >
        <ul className="flex h-auto gap-y-12 justify-center flex-col items-center">
          {menu.map((item, index) => (
            <MobileMenuItem
              closeMenu={closeMenu}
              label={item.label}
              link={item.link}
              key={index}
            />
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
