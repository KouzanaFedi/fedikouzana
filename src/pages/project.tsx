import MagneticButton from "@/components/buttons/MagneticButton";
import Header from "@/components/layout/Header";
import TechnologyIcon from "@/components/projects/TechnologyIcon";
import { motion } from "framer-motion";

const Project = () => {
  const screenShots = [
    "/captivate1.png",
    "/captivate2.png",
    "/captivate2.png",
    "/captivate2.png",
  ];
  return (
    <>
      <Header />
      <div className="relative min-h-screen pt-20 flex flex-col lg:flex-row-reverse lg:overflow-hidden">
        <motion.div
          initial={{ right: 0, x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="flex absolute z-50"
        >
          <div className="w-screen h-[calc(100vh-80px)] bg-fk-green dark:bg-fk-green-darker" />
          <div className="w-screen h-[calc(100vh-80px)] bg-fk-white dark:bg-fk-darkGray" />
          <div className="w-screen h-[calc(100vh-80px)] bg-fk-green dark:bg-fk-green-darker" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            stiffness: 40,
            type: "spring",
            bounce: 0.3,
            delay: 1.35,
          }}
          className="lg:max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-full w-full lg:w-4/12 bg-fk-white dark:bg-fk-darkGray lg:overflow-y-auto px-14 py-10"
        >
          <h1 className="font-black text-fk-gray dark:text-fk-white text-3xl lg:text-5xl uppercase leading-tight after:h-1 after:w-1/2 after:bg-fk-green after:block after:my-6">
            Fintech dashboard
          </h1>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Year</div>
              <div className="text-xl lg:text-2xl">2022</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Role</div>
              <div className="text-xl lg:text-2xl">Front-end develpment</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Product Type</div>
              <div className="text-xl lg:text-2xl">E-commerce website</div>
            </div>
            <div className="text-fk-gray dark:text-fk-white">
              <div className="text-fk-white-lighter">Client</div>
              <div className="text-xl lg:text-2xl">Graiet Tunisia</div>
            </div>
          </div>
          <p className="text-fk-gray dark:text-fk-white text-xl lg:text-2xl mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis sit
            deserunt iste quasi. Esse error, nostrum pariatur vitae aliquid
            provident velit in maiores consequatur. Excepturi aliquam aliquid
            expedita iure.
          </p>
          <div className="flex items-center gap-x-4 mt-6">
            {[
              Array.from({ length: 5 }).map((_, i) => (
                <TechnologyIcon key={i} />
              )),
            ]}
          </div>
          <div className="mt-8 w-fit">
            <MagneticButton>
              <div className="flex justify-center items-center gap-4 px-10 py-4">
                <span className="group-hover:z-30">View site</span>
              </div>
            </MagneticButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
            stiffness: 40,
            delay: 1.8,
          }}
          className="w-full lg:w-8/12 min-h-[calc(100vh-80px)] lg:min-h-full lg:max-h-[calc(100vh-80px)] h-full flex flex-col gap-y-2 bg-fk-white dark:bg-fk-black-blue lg:overflow-y-auto"
        >
          {screenShots.map((sc, index) => (
            <img key={index} src={sc} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
