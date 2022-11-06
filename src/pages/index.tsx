import React from "react";
import Link from "next/link";

import {
  FiChevronDown,
  FiChevronRight,
  FiDownload,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/projects/ProjectPreview";
import MagneticButton from "@/components/buttons/MagneticButton";
import InforCard from "@/components/InfoCard";
import HeroTextAnimation from "@/components/HeroTextAnimation";
import TimeLineSection from "@/components/timeline/TimeLineSection";
import { motion } from "framer-motion";
//ease: [0.17, 0.67, 0.83, 0.67]
export default function Home() {
  return (
    <>
      <Layout>
        <motion.main
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <section id="about-me" className="pt-20 relative">
            <div className="container px-4 mx-auto overflow-x-clip flex items-center mt-14 md:mt-28 md:mb-36 relative md:overflow-visible">
              <div className="w-full space-y-3 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  className="text-fk-black-blue dark:text-white text-center text-2xl md:text-3xl font-bold font-header z-10"
                >
                  Greetings, I’m Fedi!
                  <br className="md:hidden" /> Full-stack web developer.
                </motion.h1>
                <HeroTextAnimation />
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    bounce: 0.15,
                    duration: 0.6,
                    type: "spring",
                    delay: 0.8,
                  }}
                  className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-8 md:space-y-0 z-10 pt-6 md:mt-0"
                >
                  <MagneticButton>
                    <Link href="#projects">
                      <a className="flex items-center gap-4 px-10 py-4 w-64">
                        <span>Check my work</span>
                        <FiChevronDown
                          className="group-hover:animate-fk-bounce-animation"
                          size={24}
                        />
                      </a>
                    </Link>
                  </MagneticButton>

                  <MagneticButton variant="outlined">
                    <div className="flex justify-center items-center gap-4 px-10 py-4  w-64">
                      <span className="group-hover:z-30">My resume</span>
                      <FiDownload className="group-hover:z-30" size={24} />
                    </div>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
            <div className="mx-auto container flex flex-col gap-y-12 items-center p-4 md:p-2 gap-x-8 lg:flex-row-reverse mt-6 md:mt-0 lg:gap-y-0 xl:gap-x-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200,
                  y: 100,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="w-full lg:w-1/2 flex flex-col gap-y-8 px-8"
              >
                <h2 className="text-fk-black-blue dark:text-fk-white text-4xl md:text-5xl font-bold text-center md:text-start ">
                  Motivated fullstack and <br />
                  mobile developer
                </h2>
                <p className="text-fk-black-blue dark:text-fk-white-lighter text-2xl">
                  Hello and welcome to my portfolio! My name is Fedi, and I'm a
                  passionate programmer and gamer.
                  <br /> For web programming, I mainly use the{" "}
                  <span className="text-fk-green font-black special-element">
                    MERN
                  </span>{" "}
                  stack as well as using frameworks like Next.js Nest.js and
                  TailwindCSS, while for mobile development, I work with{" "}
                  <span className="text-fk-green font-black special-element">
                    Flutter
                  </span>
                  .
                </p>
              </motion.div>
              <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6 px-8">
                <InforCard
                  delay={0.45}
                  Icon={FiMonitor}
                  title={"Website development"}
                  content={
                    "Created with React, Vanilla HTML and CSS or Even WordPress. Landing pages? Dashboards? plateforms? You name it, the choice is yours. Performance and responsive design garenteed."
                  }
                />
                <InforCard
                  delay={0.9}
                  Icon={FiSmartphone}
                  title={"Mobile development"}
                  content={
                    "Mobile application created with Flutter. Performance and smooth running apps garenteed. Currently building only on Android; untill I get my MacBook Pro 🤞."
                  }
                />
              </div>
            </div>
          </section>
          <section id="projects" className="pt-24 p-4">
            <div className="container mx-auto gap-y-12">
              <h2 className="text-fk-black-blue dark:text-fk-white text-4xl text-center md:text-start md:text-5xl font-bold">
                Featured Projects
              </h2>
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-28 mt-20 mb-28 lg:grid-cols-2 px-8">
                {[
                  "/project-1.png",
                  "/project-2.png",
                  "/project-3.png",
                  "/project-4.png",
                ].map((img, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -100 : 100,
                      y: 100,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    key={index}
                  >
                    <ProjectPreview img={img} />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <MagneticButton>
                  <Link href="/projects">
                    <a className="flex items-center gap-4 text-fk-gray px-10 py-4">
                      <span>See more projects</span>
                      <FiChevronRight size={24} />
                    </a>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </section>
          <TimeLineSection />
        </motion.main>
      </Layout>
    </>
  );
}
