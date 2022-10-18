import {
  FiChevronDown,
  FiChevronRight,
  FiDownload,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import ProjectPreview from "@/components/ProjectPreview";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import InforCard from "@/components/InfoCard";
import React from "react";
import HeroTextAnimation from "@/components/HeroTextAnimation";
import TimeLineSection from "@/components/TimeLineSection";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="absolute top-0 md:-top-80 md:-right-40 z-0 right-0 overflow-hidden select-none">
          <img className="hidden dark:block" src="/desktop-dark.png" />
          <img className="dark:hidden" src="/desktop-light.png" />
        </div>
        <section id="greeting-block" className="pt-20 relative">
          <div className="container px-4 mx-auto overflow-x-clip flex items-center mt-14 md:mt-28 md:mb-36 relative md:overflow-visible">
            <div className="w-full space-y-6">
              <h1 className="text-fk-black-blue dark:text-white text-center text-2xl md:text-3xl font-bold font-header z-10">
                Greetings, I’m Fedi! Full-stack web developer.
              </h1>
              <HeroTextAnimation />
              <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-8 md:space-y-0 z-10">
                <MagneticButton>
                  <Link href="#projects">
                    <a className="flex items-center gap-4 px-10 py-4">
                      <span>Check my work</span>
                      <FiChevronDown
                        className="group-hover:animate-fk-bounce-animation"
                        size={24}
                      />
                    </a>
                  </Link>
                </MagneticButton>

                <MagneticButton variant="outlined">
                  <div className="flex items-center gap-4 px-10 py-4">
                    <span className="group-hover:z-30">My resume</span>
                    <FiDownload className="group-hover:z-30" size={24} />
                  </div>
                </MagneticButton>
              </div>
            </div>
          </div>
          <div className="mx-auto container flex flex-col gap-y-12 items-center p-4 md:p-2 gap-x-8 lg:flex-row-reverse lg:gap-y-0 xl:gap-x-24">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-8">
              <h2 className="text-fk-black-blue dark:text-fk-white text-5xl font-bold">
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
            </div>
            <div className="w-full flex flex-col lg:flex-col md:flex-row lg:w-1/2 gap-6">
              <InforCard
                Icon={FiMonitor}
                title={"Website development"}
                content={
                  "Created with React, Vanilla HTML and CSS or Even WordPress. Landing pages? Dashboards? plateforms? You name it, the choice is yours. Performance and responsive design garenteed."
                }
              />
              <InforCard
                Icon={FiSmartphone}
                title={"Mobile development"}
                content={
                  "Mobile application created with Flutter. Performance and smooth running apps garenteed. Currently building only on Android; untill I get my MacBook Pro 🤞."
                }
              />
            </div>
          </div>
        </section>
        <section id="projects" className="md:pt-24 pt-12 p-4">
          <div className="container mx-auto gap-y-12">
            <h2 className="text-fk-black-blue dark:text-fk-white text-5xl font-bold">
              Featured Projects
            </h2>
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-28 mt-16 mb-28">
              {[
                "/project-1.png",
                "/project-2.png",
                "/project-3.png",
                "/project-4.png",
              ].map((img, index) => (
                <ProjectPreview key={index} img={img} />
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
      </Layout>
    </>
  );
}
