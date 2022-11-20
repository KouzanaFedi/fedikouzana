import React from "react";
import Link from "next/link";

import {
  FiChevronDown,
  FiChevronRight,
  FiDownload,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { NextSeo } from "next-seo";
import DefaultSeo, { defaultValues } from "@/utils/defaultSeo";
import Layout from "@/components/layout/Layout";
import MagneticButton from "@/components/buttons/MagneticButton";
import InforCard from "@/components/InfoCard";
import HeroTextAnimation from "@/components/HeroTextAnimation";
import TimeLineSection from "@/components/timeline/TimeLineSection";
import { motion } from "framer-motion";
import { getHome } from "@/cms";
import { GetStaticProps } from "next";
import { HomeData } from "@/cms/types";
import ProjectList from "@/components/projects/ProjectList";
import { useRouter } from "next/router";

type Props = {
  homeData: HomeData;
};

export default function Home({ homeData }: Props) {
  const projectSectionRef = React.useRef<HTMLElement>();
  const router = useRouter();

  return (
    <>
      <NextSeo
        {...DefaultSeo}
        canonical={`${defaultValues.url}${router.asPath}`}
      />
      <Layout>
        <motion.main
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <section id="about-me" className="pt-20 relative">
            <div className="container px-4 mx-auto overflow-x-clip flex items-center mt-14 md:mt-28 md:mb-36 relative md:overflow-visible">
              <div className="w-full space-y-3 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: -20, skewX: -12 }}
                  whileInView={{ opacity: 1, y: 0, skewX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                  className="text-fk-black-blue dark:text-white text-center text-2xl md:text-3xl font-bold font-header z-10"
                >
                  Greetings, I’m Fedi!
                  <br className="md:hidden" /> Full-stack web developer.
                </motion.h1>
                <HeroTextAnimation />
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, skewX: -12 }}
                  whileInView={{ opacity: 1, scale: 1, skewX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    bounce: 0.3,
                    duration: 1,
                    type: "spring",
                    delay: 0.8,
                  }}
                  className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-8 md:space-y-0 z-10 pt-6 md:mt-0"
                >
                  <MagneticButton>
                    <button
                      onClick={() => {
                        if (projectSectionRef.current) {
                          projectSectionRef.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="flex items-center gap-4 px-10 py-4 w-64"
                    >
                      <span>Check my work</span>
                      <FiChevronDown
                        className="group-hover:animate-fk-bounce-animation"
                        size={24}
                      />
                    </button>
                  </MagneticButton>

                  <MagneticButton variant="outlined">
                    <Link
                      download={"resume.pdf"}
                      href={homeData.resume.url}
                      rel="noreferrer"
                    >
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="flex justify-center items-center gap-4 px-10 py-4 w-64"
                      >
                        <span className="group-hover:z-30">My resume</span>
                        <FiDownload className="group-hover:z-30" size={24} />
                      </a>
                    </Link>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
            <div className="mx-auto container flex flex-col gap-y-12 items-center p-4 md:p-2 gap-x-8 lg:flex-row-reverse min-h-[300px] mt-6 md:mt-0 lg:gap-y-0 xl:gap-x-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                  skewX: -12,
                }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="w-full lg:w-1/2 flex flex-col gap-y-8 px-4 md:px-8"
              >
                <h2 className="text-fk-black-blue dark:text-fk-white text-4xl font-bold text-center md:text-start">
                  Motivated fullstack and <br />
                  mobile developer
                </h2>
                <p className="text-fk-black-blue dark:text-fk-white-lighter text-2xl">
                  Hello and welcome to my portfolio! My name is Fedi, and I'm a
                  passionate programmer and gamer.
                  <br /> For web programming, I mainly use the{" "}
                  <span className="text-fk-green-darker font-black special-element">
                    MERN
                  </span>{" "}
                  stack as well as using frameworks like Next.js Nest.js and
                  TailwindCSS, while for mobile development, I work with{" "}
                  <span className="text-fk-green-darker font-black special-element">
                    Flutter
                  </span>
                  .
                </p>
              </motion.div>
              <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6 px-4 md:px-8">
                <InforCard
                  delay={0.35}
                  Icon={FiMonitor}
                  title={"Website development"}
                  content={
                    "Created with React, Vanilla HTML and CSS or Even WordPress. Landing pages? Dashboards? plateforms? You name it, the choice is yours. Performance and responsive design garenteed."
                  }
                />
                <InforCard
                  delay={0.75}
                  Icon={FiSmartphone}
                  title={"Mobile development"}
                  content={
                    "Mobile application created with Flutter. Performance and smooth running apps garenteed. Currently building only on Android; untill I get my MacBook Pro 🤞."
                  }
                />
              </div>
            </div>
          </section>
          <section
            ref={projectSectionRef}
            id="projects"
            className="pt-24 p-4 z-20 relative"
          >
            <div className="container mx-auto gap-y-12">
              <h2 className="text-fk-black-blue dark:text-fk-white text-4xl text-center md:text-5xl font-bold">
                Featured Projects
              </h2>
              <ProjectList list={homeData.featuredProjects} />
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
          <TimeLineSection
            academic={homeData.academic}
            professional={homeData.professional}
          />
        </motion.main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const homeData = await getHome();
  return {
    props: { homeData },
    revalidate: 10,
  };
};
