import { motion } from "framer-motion";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const FadeIn = ({ children }: Props) => {
  return <motion.div>{children}</motion.div>;
};

export default FadeIn;
