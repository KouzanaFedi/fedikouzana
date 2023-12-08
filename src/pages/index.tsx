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
                  Salutations, My name is{" "}
                  <span className="special-element">Fedi Kouzana</span>!
                  <br className="md:hidden" /> Full-stack developer.
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
                      target="_blank"
                      className="flex justify-center items-center gap-4 px-10 py-4 w-64"
                    >
                      <span className="group-hover:z-30">My resume</span>
                      <FiDownload className="group-hover:z-30" size={24} />
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
                  Dedicated full-stack
                  <br /> and front-end developer
                </h2>
                <p className="text-fk-black-blue dark:text-fk-white-lighter text-2xl">
                  Welcome to my portfolio! Fedi here, a keen coder and gamer. I
                  mostly create web-based applications, but I also create some
                  mobile applications. I mostly use{" "}
                  <span className="text-fk-green-darker font-black special-element">
                    React
                  </span>{" "}
                  or{" "}
                  <span className="text-fk-green-darker font-black special-element">
                    Next.js
                  </span>{" "}
                  and styling it using TailwindCSS for web development, and{" "}
                  <span className="text-fk-green-darker font-black special-element">
                    Flutter
                  </span>{" "}
                  for mobile apps.
                </p>
              </motion.div>
              <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6 px-4 md:px-8">
                <InforCard
                  delay={0.35}
                  Icon={FiMonitor}
                  title={"Web development"}
                  content={
                    "Created with React, Vanilla HTML and CSS, or even WordPress. Landing pages? Dashboards? Platforms? You decide. Performance, SEO, and responsive design are all guaranteed."
                  }
                />
                <InforCard
                  delay={0.75}
                  Icon={FiSmartphone}
                  title={"Mobile development"}
                  content={
                    "I develop mobile apps with Flutter. Applications with guaranteed speed and fluid operation. Currently, I can only deploy apps on Android while I wait for my MacBook 🤞."
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
                  <Link
                    className="flex items-center gap-4 text-fk-gray px-10 py-4"
                    href="/projects"
                  >
                    <span>See more projects</span>
                    <FiChevronRight size={24} />
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
